import { Component, OnInit, Input } from '@angular/core';
import { ObjectUrl } from '../../modelos/ofuscacion';

@Component({
  selector: 'app-home-tabla',
  templateUrl: './home-tabla.component.html',
  styleUrls: ['./home-tabla.component.scss']
})
export class HomeTablaComponent implements OnInit {

  version = 0;
  @Input() proyecto: string;
  @Input() set actualizar(actualizar: number) {
    if (actualizar > this.version) {
      this.version = actualizar;
      this.cargarDatos();
    }
  }
  lista: ObjectUrl[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(): void {
    if (localStorage.getItem(this.proyecto) !== undefined && localStorage.getItem(this.proyecto) !== null) {
      try {
        this.lista = JSON.parse(localStorage.getItem(this.proyecto));
      } catch (e) {
        console.error(`Los datos almacenados para ${this.proyecto} estaban corruptos y han sido eliminados.`);
        localStorage.setItem(this.proyecto, null);
        this.lista = [];
      }
    } else {
      this.lista = [];
    }
  }

  abrirUrl(url: string): void {
    window.open(url + '&t=' + new Date().getTime());
  }

  eliminarElemento(index: number): void {
    this.lista.splice(index, 1);
    localStorage.setItem(this.proyecto, JSON.stringify(this.lista));
  }

}
