import { Paciente } from './../../providers/paciente/paciente';
import { Avaliacao1Page } from './../avaliacao1/avaliacao1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PacienteDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente-detail',
  templateUrl: 'paciente-detail.html',
})
export class PacienteDetailPage {
  key = this.navParams.get('item').paciente;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    // console.log(this.);
  }
  chamadaAvaliacao(){
    this.navCtrl.push(Avaliacao1Page,{paciente : this.navParams.get('item')});
  }

}
