import { Component, OnInit } from '@angular/core';

const PROYECTOS = [
    {
        titulo: 'Gestion de Consentimiento GECO',
        tipos: ['cipa', 'poblationalId', 'codint'],
        alias: 'GECO',
        urlPr: 'https://argoss-pr.saludcastillayleon.es/geco/home',
        // urlDs: 'http://localhost:4200/home',
        urlDs: 'https://argoss-ds.saludcastillayleon.es/geco/home'
    },
    {
        titulo: 'Historia Social Resumida HSU',
        tipos: ['cipa', 'docidentidad', 'patientid', 'codint'],
        alias: 'HSU',
        urlPr: 'https://argoss-pr.saludcastillayleon.es/hs/datos',
        urlDs: 'https://argoss-ds.saludcastillayleon.es/hs/datos'
    },
    {
        titulo: 'Test Sanitario SAMI',
        tipos: ['cipa', 'poblationalId', 'codint'],
        alias: 'SAMI',
        urlPr: 'https://argoss-pr.saludcastillayleon.es/test/sanitario/sami',
        urlDs: 'https://argoss-ds.saludcastillayleon.es/test/sanitario/sami'
    },
    {
        titulo: 'Plan de Caso PRVI',
        tipos: ['codint'],
        alias: 'PRVI',
        urlPr: 'https://argoss-pr.saludcastillayleon.es/prvi/home',
        urlDs: 'https://argoss-ds.saludcastillayleon.es/prvi/home'
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
