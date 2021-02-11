import { Elemento } from './enumElemento';

export class Tipo {
  constructor(private _nombre: String, private _elemento: String) {}
  get nombre() {
    return this._nombre;
  }
  get elemento() {
    return this._elemento;
  }
}
