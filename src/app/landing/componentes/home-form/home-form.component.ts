import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjectBase64, ObjectUrl } from '../../modelos/ofuscacion';

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {

  @Input() tipos: string[];
  @Input() proyecto: string;
  @Input() urlPr: string;
  @Input() urlDs: string;
  actualizar = 0;

  formulario: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      tipo: ['', Validators.required],
      idProcedimiento: ['', null],
      idConsentimiento: ['', null],
      rutaHs: ['', null],
      descripcion: ['', Validators.required],
      pruebas: [false, null]
    });
  }

  ngOnInit() {
  }

  get f() { return this.formulario.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.formulario.invalid) {
      return;
    }

    const obj: ObjectBase64 = {
      id: this.formulario.value.id,
      codType: this.formulario.value.tipo
    };

    if (this.formulario.value.idProcedimiento !== null && this.formulario.value.idProcedimiento !== '') {
      obj.procedimientoId = this.formulario.value.idProcedimiento;
      if (this.formulario.value.idConsentimiento !== null && this.formulario.value.idConsentimiento !== '') {
        obj.consentimientoId = this.formulario.value.idConsentimiento;
      }
    }

    const b = window.btoa(JSON.stringify(obj));
    let url = this.formulario.value.pruebas ? this.urlPr : this.urlDs;

    if (this.formulario.value.rutaHs !== null && this.formulario.value.rutaHs !== '') {
      url += this.formulario.value.rutaHs;
    }

    url += '?b=' + b;

    let obj2: ObjectUrl[];
    if (localStorage.getItem(this.proyecto) !== undefined && localStorage.getItem(this.proyecto) !== null) {
      try {
        obj2 = JSON.parse(localStorage.getItem(this.proyecto));
      } catch (e) {
        console.error(`Los datos almacenados para ${this.proyecto} estaban corruptos y han sido eliminados.`);
        localStorage.setItem(this.proyecto, null);
        obj2 = [];
      }
    } else {
      obj2 = [];
    }
    obj2.unshift({
      descripcion: this.formulario.value.descripcion,
      url: url
    });
    localStorage.setItem(this.proyecto, JSON.stringify(obj2));
    this.actualizar++;
    this.submitted = false;
    this.formulario.reset();
  }

}
