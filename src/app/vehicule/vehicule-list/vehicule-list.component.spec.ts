/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';

import { VehiculeListComponent } from './vehicule-list.component';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../vehicule';

describe('VehiculeListComponent', () => {
  let component: VehiculeListComponent;
  let fixture: ComponentFixture<VehiculeListComponent>;
  let debug: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculeListComponent],
      providers: [VehiculeService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeListComponent);
    component = fixture.componentInstance;
    component.vehicules = Array.from(
      { length: 3 },
      () =>
        new Vehicule({
          id: faker.number.int(),
          marca: faker.word.words(),
          linea: faker.word.words(2),
          referencia: faker.word.words(2),
          modelo: faker.date.past().getFullYear(),
          kilometraje: faker.number.int(),
          color: faker.color.human(),
          imagen: faker.image.url(),
        })
    );

    console.log('component', component.vehicules.length);
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Component has a table', () => {
    expect(debug.query(By.css('table'))).not.toBeNull();
  });

  it('Table has headers', () => {
    expect(debug.query(By.css('thead')).childNodes.length).toEqual(1);
  });

  it('Table has rows', () => {
    expect(debug.queryAll(By.css('tbody>tr')).length).toEqual(3);
  });
});
