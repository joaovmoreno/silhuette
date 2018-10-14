import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteDetailPage } from './paciente-detail';

@NgModule({
  declarations: [
    PacienteDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteDetailPage),
  ],
})
export class PacienteDetailPageModule {}
