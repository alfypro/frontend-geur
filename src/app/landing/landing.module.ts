import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HomeFormComponent } from './componentes/home-form/home-form.component';
import { HomeTablaComponent } from './componentes/home-tabla/home-tabla.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    AssignmentComponent,
    HomeFormComponent,
    HomeTablaComponent
  ]
})
export class LandingModule { }
