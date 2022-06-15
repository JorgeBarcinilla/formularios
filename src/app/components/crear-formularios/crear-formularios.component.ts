import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-formularios',
  templateUrl: './crear-formularios.component.html',
  styleUrls: ['./crear-formularios.component.scss']
})
export class CrearFormulariosComponent implements OnInit {

  formularioA = this.fb.group({
    nombre: ['Jorge', [Validators.required, Validators.minLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['Este es el mensaje', [Validators.required, Validators.maxLength(30)]]
  })

  formularioB = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(30)])
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  metodoPrueba() {

  }

}
