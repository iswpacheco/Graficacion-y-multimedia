import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService} from '../../providers/auth-service';


@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage
 {
    constructor(public navCtrl: NavController,
        public authService: AuthService){

    }
  slides = [
    {
      title: "China avisa: el peligro de una guerra accidental por culpa de las armas inteligentes es real y creciente",
      description: "Las actuales normas internacionales sobre la guerra nada dicen sobre los ataques autónomos, y el miedo a que eso pueda desembocar una escalada militar involuntaria crece a ambos lados del Pacífico.",
      image: "../../assets/imgs/avion.jpg",
    },
    {
      title: "Cientificos investigan como usar la IA para fabricar procesadores de diamante ",
      description: "<b>Asombroso</b> Científicos del MIT, Rusia y Singapur crear un algoritmo que permite que sea una red neuronal quien haga los cálculos de cómo afectaría aplicar técnicas de ingeniería de tensión a un determinado material",
      image: "../../assets/imgs/diamond.jpg",
    },
    {
      title: "Skype recurre a la IA para introducir el desenfoque de fondos en sus videollamadas",
      description: "La función presentada ahora por el equipo de desarrollo de la herramienta de videollamadas de Microsoft permitirá alternar sobre la marcha entre el fondo tradicional y el difuminado, o configurar éste último por defecto.",
      image: "../../assets/imgs/skype.jpg",
    }
  ];
}