import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/persona.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  persona: Persona = new Persona('Jorge Palacio', 'jorge@gmail.com', 'este es el mensaje de reactive forms');

  formularioPersona = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(30)])
  })

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.formularioPersona.get('nombre')?.setValue(this.persona.nombre);
      this.formularioPersona.get('email')?.setValue(this.persona.email);
      this.formularioPersona.get('mensaje')?.setValue(this.persona.mensaje);
    }, 10000);
  }

  mostrarFormulario() {
    console.log(this.formularioPersona.value);
  }

}
