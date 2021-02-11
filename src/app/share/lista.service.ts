import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  private _mapa: Map<String, String> = new Map<String, String>();
  constructor() {
    this.construirMapa();
  }
  private construirMapa() {
    this._mapa.set('fire', '../assets/icon/fire.png');
    this._mapa.set('water', '../assets/icon/water.png');
    this._mapa.set('flying', '../assets/icon/flying.png');
    this._mapa.set('ice', '../assets/icon/ice.png');
    this._mapa.set('normal', '../assets/icon/normal.png');
    this._mapa.set('poison', '../assets/icon/veneno.png');
    this._mapa.set('grass', '../assets/icon/planta.png');
    this._mapa.set('fairy', '../assets/icon/hada.png');
    this._mapa.set('electric', '../assets/icon/electric.png');
    this._mapa.set('dark', '../assets/icon/siniestro.png');
    this._mapa.set('steel', '../assets/icon/acero.png');
    this._mapa.set('bug', '../assets/icon/bicho.png');
    this._mapa.set('dragon', '../assets/icon/dragon.png');
    this._mapa.set('ghost', '../assets/icon/fantasma.png');
    this._mapa.set('fighting', '../assets/icon/lucha.png');
    this._mapa.set('psychic', '../assets/icon/psiquico.png');
    this._mapa.set('ground', '../assets/icon/tierra.png');
    this._mapa.set('rock', '../assets/icon/roca.png');
  }
  public get mapa() {
    return this._mapa;
  }
}
