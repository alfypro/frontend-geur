import { Component, OnInit, Input } from '@angular/core';

interface ObjectBase64 {
  id: string;
  codType: string;
  procedimientoId?: string;
  consentimientoId?: string;
}

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {

  @Input() tipos: string[];
  @Input() proyecto: string;

  constructor() { }

  ngOnInit() {
  }

}
