import { Component, OnInit } from '@angular/core';
import { VehiculeService } from '../vehicule.service';
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css'],
})
export class VehiculeListComponent implements OnInit {
  vehicules: Array<Vehicule> = [];

  constructor(private vehiculeService: VehiculeService) {}

  ngOnInit() {
    this.getVehicule();
  }

  getVehicule() {
    this.vehiculeService.getVehicules().subscribe((vehicules) => {
      this.vehicules = vehicules;
    });
  }
}
