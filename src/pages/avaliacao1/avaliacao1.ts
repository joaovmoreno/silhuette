import { Component,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-avaliacao1',
  templateUrl: 'avaliacao1.html',
})
export class Avaliacao1Page {
  dt_nascimento = this.navParams.get('item').dt_nascimento
  dataNascimento= new Date(this.dt_nascimento).getFullYear();
  dataAtual = new Date(Date.now()).getFullYear();
  idade = this.dataAtual - this.dataNascimento;

  naoprimeiro:boolean;
  @ViewChild('slider') slider: any;
  slides = [];
  adultF = [
    {
      title: "Imagem 1",
      description: "",
      id: 1,
      imc:12.5,
      image:"assets/imgs/Adult_Mulher1.png",
    },
    {
      title: "Imagem 2",
      description: "",
      id:2,
      imc:15,
      image: "assets/imgs/Adult_Mulher2.png",
    },
    {
      title: "Imagem 3",
      description: "",
      id: 3,
      imc:17.5,
      image: "assets/imgs/Adult_Mulher3.png",
    },
    {
      title: "Imagem 4",
      description: "",
      id: 4,
      imc:20,
      image: "assets/imgs/Adult_Mulher4.png",
    },
    {
      title: "Imagem 5",
      description: "",
      id: 5,
      imc:22.5,
      image: "assets/imgs/Adult_Mulher5.png",
    },
    {
      title: "Imagem 6",
      description: "",
      id: 6,
      imc:25,
      image: "assets/imgs/Adult_Mulher6.png",
    },
    {
      title: "Imagem 7",
      description: "",
      id: 7,
      imc:27.5,
      image: "assets/imgs/Adult_Mulher7.png",
    }, {
      title: "Imagem 8",
      description: "",
      id: 8,
      imc:30,
      image: "assets/imgs/Adult_Mulher8.png",
    },
    {
      title: "Imagem 9",
      description: "",
      id: 9,
      imc:32.5,
      image: "assets/imgs/Adult_Mulher9.png",
    },
    {
      title: "Imagem 10",
      description: "",
      id: 10,
      imc:35,
      image: "assets/imgs/Adult_Mulher10.png",
    },
    {
      title: "Imagem 11",
      description: "",
      id:11,
      imc:37.5,
      image: "assets/imgs/Adult_Mulher11.png",
    },
    {
      title: "Imagem 12",
      description: "",
      id:12,
      imc:40,
      image: "assets/imgs/Adult_Mulher12.png",
    },
    {
      title: "Imagem 13",
      description: "",
      id:13,
      imc:42.5,
      image: "assets/imgs/Adult_Mulher13.png",
    },
    {
      title: "Imagem 14",
      description: "",
      id:14,
      imc:45,
      image: "assets/imgs/Adult_Mulher14.png",
    },
    {
      title: "Imagem 15",
      description: "",
      id:15,
      imc:47.5,
      image: "assets/imgs/Adult_Mulher15.png",
    },

  ];

  adultM =[
    {
      title: "Imagem 16",
      description: "",
      id: 1,
      imc:12.5,
      image: "assets/imgs/Adult_Homem1.png",
    },
    {
      title: "Imagem 17",
      description: "",
      id:2,
      imc:15,
      image: "assets/imgs/Adult_Homem2.png",
    },
    {
      title: "Imagem 18",
      description: "",
      id: 3,
      imc:17.5,
      image: "assets/imgs/Adult_Homem3.png",
    },
    {
      title: "Imagem 19",
      description: "",
      id: 4,
      imc:20,
      image: "assets/imgs/Adult_Homem4.png",
    },
    {
      title: "Imagem 20",
      description: "",
      id: 5,
      imc:22.5,
      image: "assets/imgs/Adult_Homem5.png",
    },
    {
      title: "Imagem 21",
      description: "",
      id: 6,
      imc:25,
      image: "assets/imgs/Adult_Homem6.png",
    },
    {
      title: "Imagem 22",
      description: "",
      id: 7,
      imc:27.5,
      image: "assets/imgs/Adult_Homem7.png",
    }, {
      title: "Imagem 23",
      description: "",
      id: 8,
      imc:30,
      image: "assets/imgs/Adult_Homem8.png",
    },
    {
      title: "Imagem 24",
      description: "",
      id: 9,
      imc:32.5,
      image: "assets/imgs/Adult_Homem9.png",
    },
    {
      title: "Imagem 25",
      description: "",
      id: 10,
      imc:35,
      image: "assets/imgs/Adult_Homem10.png",
    },
    {
      title: "Imagem 26",
      description: "",
      id:11,
      imc:37.5,
      image: "assets/imgs/Adult_Homem11.png",
    },
    {
      title: "Imagem 27",
      description: "",
      id:12,
      imc:40,
      image: "assets/imgs/Adult_Homem12.png",
    },
    {
      title: "Imagem 28",
      description: "",
      id:13,
      imc:42.5,
      image: "assets/imgs/Adult_Homem13.png",
    },
    {
      title: "Imagem 29",
      description: "",
      id:14,
      imc:45,
      image: "assets/imgs/Adult_Homem14.png",
    },
    {
      title: "Imagem 30",
      description: "",
      id:15,
      imc:47.5,
      image: "assets/imgs/Adult_Homem15.png",
    },

  ];

  kidM = [
    {
      title: "Imagem 31",
      description: "",
      id: 1,
      imc:12,
      image: "assets/imgs/Kid_Homem1.png",
    },
    {
      title: "Imagem 32",
      description: "",
      id:2,
      imc:13.7,
      image: "assets/imgs/Kid_Homem2.png",
    },
    {
      title: "Imagem 33",
      description: "",
      id: 3,
      imc:15.4,
      image: "assets/imgs/Kid_Homem3.png",
    },
    {
      title: "Imagem 34",
      description: "",
      id: 4,
      imc:17.1,
      image: "assets/imgs/Kid_MHomem4.png",
    },
    {
      title: "Imagem 35",
      description: "",
      id: 5,
      imc:18.8,
      image: "assets/imgs/Kid_Homem5.png",
    },
    {
      title: "Imagem 36",
      description: "",
      id: 6,
      imc:20.5,
      image: "assets/imgs/Kid_Homem6.png",
    },
    {
      title: "Imagem 37",
      description: "",
      id: 7,
      imc:22.2,
      image: "assets/imgs/Kid_Homem7.png",
    }, {
      title: "Imagem 38",
      description: "",
      id:8,
      imc:23.9,
      image: "assets/imgs/Kid_Homem8.png",
    },
    {
      title: "Imagem 39",
      description: "",
      id: 9,
      imc:25.6,
      image: "assets/imgs/Kid_Homem9.png",
    },
    {
      title: "Imagem 40",
      description: "",
      id: 10,
      imc:27.3,
      image: "assets/imgs/Kid_Homem10.png",
    },
    {
      title: "Imagem 41",
      description: "",
      id:11,
      imc:29,
      image: "assets/imgs/Kid_Homem11.png",
    },
  ];

  kidF = [
    {
      title: "Imagem 42",
      description: "",
      id: 1,
      imc:12,
      image: "assets/imgs/Kid_Mulher1.png",
    },
    {
      title: "Imagem 43",
      description: "",
      id:2,
      imc:13.7,
      image: "assets/imgs/Kid_Mulher2.png",
    },
    {
      title: "Imagem 44",
      description: "",
      id: 3,
      imc:15.4,
      image: "assets/imgs/Kid_Mulher3.png",
    },
    {
      title: "Imagem 45",
      description: "",
      id: 4,
      imc:17.1,
      image: "assets/imgs/Kid_Mulher4.png",
    },
    {
      title: "Imagem 46",
      description: "",
      id: 5,
      imc:18.8,
      image: "assets/imgs/Kid_Mulher5.png",
    },
    {
      title: "Imagem 47",
      description: "",
      id: 6,
      imc:20.5,
      image: "assets/imgs/Kid_Mulher6.png",
    },
    {
      title: "Imagem 48",
      description: "",
      id: 7,
      imc:22.2,
      image: "assets/imgs/Kid_Mulher7.png",
    },
    {
      title: "Imagem 49",
      description: "",
      id: 8,
      imc:23.9,
      image: "assets/imgs/Kid_Mulher8.png",
    },
    {
      title: "Imagem 50",
      description: "",
      id: 9,
      imc:25.6,
      image: "assets/imgs/Kid_Mulher9.png",
    },
    {
      title: "Imagem 51",
      description: "",
      id: 10,
      imc:27.3,
      image: "assets/imgs/Kid_Mulher10.png",
    },
    {
      title: "Imagem 52",
      description: "",
      id:11,
      imc:29,
      image: "assets/imgs/Kid_Mulher11.png",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log(this.idade);
    this.instructions();
  }
  instructions(){
    let instrucao = this.alert.create({
      title:'Tutorial',
      subTitle:'Prepare-se para fazer sua a avaliação. \n' +
      'Serão 4 (quatro) perguntas e 15 (quinze) figuras para você escolher.\n' +
      'Assim que escolher a figura basta apertar na imagem !\n',
      buttons:[{
        text:'ok',
        handler:()=>{
          console.log('ok');
        }
      }]
    });
    instrucao.present();
  }


}
