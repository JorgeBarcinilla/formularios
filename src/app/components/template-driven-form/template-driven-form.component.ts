import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  personaModel: Persona = new Persona('', '', '');

  constructor() { }

  ngOnInit(): void {
  }

  guardarDatos(formValue: any){
    console.log(formValue);
  }

}
