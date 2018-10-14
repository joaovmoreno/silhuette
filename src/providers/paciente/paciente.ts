import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class PacienteProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(paciente: Paciente) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, paciente);
  }

  public update(key: string, paciente: Paciente) {
    return this.save(key, paciente);
  }

  private save(key: string, paciente: Paciente) {
    return this.storage.set(key, paciente);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }
  public get(key:string){
    return this.storage.get(key);
  }

  public getAll() {

    let Pacientes: PacienteList[] = [];

    return this.storage.forEach((value: Paciente, key: string, iterationNumber: Number) => {
      let paciente = new PacienteList();
      paciente.key = key;
      paciente.paciente = value;
      Pacientes.push(paciente);
    })
      .then(() => {
        return Promise.resolve(Pacientes);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Paciente {
  nome: string;
  genero: string;
  dt_nascimento: Date;
  peso: number;
  altura: number
  avaliacoes: [{}];
}

export class PacienteList {
  key: string;
  paciente: Paciente;
}