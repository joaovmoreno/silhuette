import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PacienteProvider, Paciente } from '../../providers/paciente/paciente';

@IonicPage()
@Component({
  selector: 'page-edit-paciente',
  templateUrl: 'edit-paciente.html',
})
export class EditPacientePage {
  model: Paciente;
  key: string;
  paciente = null;
  edit = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private PacienteProvider: PacienteProvider, private toast: ToastController) {
    if (this.navParams.data.paciente && this.navParams.data.key) {
      this.model = this.navParams.data.paciente;
      this.key =  this.navParams.data.key;
      this.edit = true;
      if (this.edit){
        this.paciente = this.navParams.get('paciente').paciente;
        this.model.nome = this.paciente.nome;
        this.model.genero = this.paciente.genero;
        this.model.dt_nascimento = this.paciente.dt_nascimento;
        this.model.avaliacoes = this.paciente.avaliacoes;     
          if(!this.model.peso || this.model.altura){
          this.model.altura = this.paciente.altura;
          this.model.peso = this.paciente.peso;
          console.log('entrou if peso e altura');
        }
      }
      console.log(this.model);
    } else {
      this.model = new Paciente();
      console.log(this.edit);
    }
  }

  save() {
    this.savePaciente()
      .then(() => {
        this.toast.create({ message: 'Paciente salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o paciente.', duration: 3000, position: 'botton' }).present();
      });
  }

  private savePaciente() {
    if (this.key) {
      return this.PacienteProvider.update(this.key, this.model);
    } else {
      return this.PacienteProvider.insert(this.model);
    }
  }

}