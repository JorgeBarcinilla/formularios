import { Component, ViewChild } from '@angular/core';
import { CrearFormulariosComponent } from './components/crear-formularios/crear-formularios.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formularios';
  @ViewChild('formurarioComponent') formurarioComponent!: CrearFormulariosComponent

  ngAfterViewInit() {
    this.formurarioComponent.metodoPrueba()
  }
}
