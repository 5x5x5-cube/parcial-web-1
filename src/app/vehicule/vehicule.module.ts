import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VehiculeListComponent],
  exports: [VehiculeListComponent],
})
export class VehiculeModule {}
