import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPacientePage } from './edit-paciente';

@NgModule({
  declarations: [
    EditPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(EditPacientePage),
  ],
})
export class EditPacientePageModule {}
