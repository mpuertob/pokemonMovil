import { Component } from '@angular/core';
import { Tipo } from '../core/model/Tipo';
import { HabladorMovilService } from '../share/hablador-movil.service';
import { ListaService } from '../share/lista.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemon: String = 'ho-oh';
  d: Document = document;
  constructor(
    private listaService: ListaService,
    private hablador: HabladorMovilService
  ) {}
  async buscarPokemon() {
    this.pokemon = this.pokemon.toLowerCase();
    let url = 'https://pokeapi.co/api/v2/pokemon/' + this.pokemon;
    fetch(url)
      .then((respuesta) => {
        respuesta
          .json()
          .then((datos) => {
            alert('Pokemón Encontrado');
            console.log(datos);
            let { name, abilities, sprites, types, moves } = datos;

            const $textoAmostrar = this.d.getElementById('textoAmostrar');
            $textoAmostrar.textContent = '';

            this.mostrarNombrePokemon($textoAmostrar, name);
            this.mostrarFotosPokemon(sprites, $textoAmostrar);
            this.mostrarHabilidadesPokemon($textoAmostrar, abilities);
            this.mostrarTipo($textoAmostrar, types);
            this.mostrarMovimientos($textoAmostrar, moves);
          })
          .catch(() => {
            let error = 'Pokemon No Encontrado';
            const $textoAmostrar = this.d.getElementById('textoAmostrar');
            $textoAmostrar.innerHTML = `<div><h1>${error}</h1><img src="../assets/icon/anonymous.jpg"><img src="../assets/icon/noEncontrado.jpg"></div>`;
          });
      })
      .catch((err) => {
        alert('Ha ocurrido un error ' + err);
        alert('Revise aver si el wifi o los datos están activados máquina');
      });
  }
  mostrarNombrePokemon($textoAmostrar, name) {
    let $h1Name = this.d.createElement('h1');
    $h1Name.textContent = 'Nombre: ' + name;
    $textoAmostrar.appendChild($h1Name);
  }
  mostrarFotosPokemon(sprites, $textoAmostrar) {
    let { back_default, back_shiny, front_default, front_shiny } = sprites;
    let $divImagenes = this.d.createElement('div');

    $divImagenes.innerHTML =
      'Fotos: ' +
      `    <ul>
           <li><img src='${back_default}'></></li>
           <li><img src='${back_shiny}'></></li>
           <li><img src='${front_default}'></></li>
           <li><img src='${front_shiny}'></></li>
           </ul> `;
    $textoAmostrar.appendChild($divImagenes);
  }
  mostrarHabilidadesPokemon($textoAmostrar, abilities) {
    let $divHabilidades = this.d.createElement('div');
    $divHabilidades.textContent = 'Habilidades:';
    let cadena = '';
    let html = `<Select>`;
    abilities.forEach((elemento) => {
      let habilidad = elemento.ability.name;
      elemento.ability.url;
      cadena = habilidad + '. ';
      html += `
        <option>${cadena}</option>`;
    });
    html += `</Select>`;
    $divHabilidades.innerHTML = 'Habilidades: ' + html;
    $textoAmostrar.appendChild($divHabilidades);
  }
  mostrarTipo($textoAmostrar: HTMLElement, types: any) {
    console.log(types);
    let h2 = this.d.createElement('h2');
    let html = `Pokemon de Tipo: `;
    let tipos = [];
    types.forEach((type) => {
      let nombreTipo: String = type.type.name;
      tipos.push(nombreTipo);
      let elemento = this.listaService.mapa.get(nombreTipo);
      let tipo: Tipo = new Tipo(nombreTipo, elemento);
      html += `<img src="${tipo.elemento}" alt="${tipo.elemento}">${nombreTipo}.</img>`;
    });
    let cadenaHablar = tipos.join('y de tipo');
    this.hablador.hablar(
      'Su nombre es ' + this.pokemon + ' es de tipo ' + cadenaHablar
    );
    h2.innerHTML = html;
    $textoAmostrar.appendChild(h2);
  }
  mostrarMovimientos($textoAmostrar: HTMLElement, moves: any) {
    let $divMoves = this.d.createElement('div');
    let cadenitas = '';
    let html = `Todos los Movimientos: <Select>`;
    moves.forEach((elemento) => {
      let nombreMovimiento = elemento.move.name;
      cadenitas = nombreMovimiento + '. ';
      html += `
        <option>${cadenitas}</option>`;
    });
    html += `</Select>`;
    $divMoves.innerHTML = html;
    $textoAmostrar.appendChild($divMoves);
  }
  mostrarListadoDeAtaques() {}
}
