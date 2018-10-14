import { PacienteDetailPage } from './../paciente-detail/paciente-detail';
import { EditPacientePage } from './../edit-paciente/edit-paciente';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { PacienteProvider, Paciente, PacienteList } from '../../providers/paciente/paciente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pacientes: PacienteList[];

  constructor(public navCtrl: NavController, private pacienteService: PacienteProvider, private toast: ToastController) { }

  ionViewDidEnter() {
    this.pacienteService.getAll()
      .then((result) => {
        this.pacientes = result;
      });
  }

  addPaciente() {
    this.navCtrl.push(EditPacientePage);
  }

  editPaciente(item: PacienteList) {
    this.navCtrl.push(EditPacientePage, { key: item.key, paciente: item});
  }

  removePaciente(item: PacienteList) {
    this.pacienteService.remove(item.key)
      .then(() => {
        // Removendo do array de items
        var index = this.pacientes.indexOf(item);
        this.pacientes.splice(index, 1);
        this.toast.create({ message: 'Contato removido.', duration: 3000, position: 'botton' }).present();
      })
  }
  viewItem(item:PacienteList){
    this.navCtrl.push(PacienteDetailPage, {
      item: item
    });
    console.log(item);
  }

}