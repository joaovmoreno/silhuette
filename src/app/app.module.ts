import { Avaliacao1Page } from './../pages/avaliacao1/avaliacao1';
import { PacienteDetailPage } from './../pages/paciente-detail/paciente-detail';
import { MainPage } from './../pages/main/main';
import { EditPacientePage } from './../pages/edit-paciente/edit-paciente';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { DatePipe} from  '@angular/common';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule} from  '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PacienteProvider } from '../providers/paciente/paciente';
import { AnimationService, AnimatesDirective } from 'css-animator';
import { Avaliacao2Page } from '../pages/avaliacao2/avaliacao2';

@NgModule({
  declarations: [
    MyApp,
    EditPacientePage,
    HomePage,
    MainPage,
    PacienteDetailPage,
    Avaliacao1Page,
    AnimatesDirective,
    Avaliacao2Page
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditPacientePage,
    HomePage,
    MainPage,
    PacienteDetailPage,
    Avaliacao1Page,
    Avaliacao2Page
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatePipe,
    PacienteProvider,
    AnimationService
    ]
})
export class AppModule {}
