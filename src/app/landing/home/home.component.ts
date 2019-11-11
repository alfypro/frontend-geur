import { Component, OnInit } from '@angular/core';

const PROYECTOS = [
    {
        titulo: 'Gestion de Consentimiento GECO',
        tipos: ['cipa', 'poblationalId', 'codint'],
        alias: 'GECO'
    },
    {
        titulo: 'Historia Social Resumida HSU',
        tipos: ['cipa', 'docidentidad', 'patientid', 'codint'],
        alias: 'HSU'
    },
    {
        titulo: 'Test Sanitario SAMI',
        tipos: ['cipa', 'poblationalId', 'codint'],
        alias: 'SAMI'
    }
];

interface Proyecto {
    titulo: string;
    tipos: string[];
    alias: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    proyectos: Proyecto[];

    constructor() {
        this.proyectos = PROYECTOS;
    }

    ngOnInit() { }
}
