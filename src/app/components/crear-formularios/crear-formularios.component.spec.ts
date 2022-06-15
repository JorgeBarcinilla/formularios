import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFormulariosComponent } from './crear-formularios.component';

describe('CrearFormulariosComponent', () => {
  let component: CrearFormulariosComponent;
  let fixture: ComponentFixture<CrearFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearFormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
