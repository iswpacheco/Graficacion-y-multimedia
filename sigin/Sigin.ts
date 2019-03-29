import { Component } from "@angular/core";
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { AuthService } from "../../providers/auth-service";

import { UserModel } from "../../models/user-model";

import { RegisterPage } from '../register/register';
import { HomePage } from "../home/home";


@Component({
    selector: 'page-SigIn',
    templateUrl: 'SigIn.html'
})


export class SigInPage{
    userModel: UserModel;
    constructor(public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public authService: AuthService) {
        this.userModel = new UserModel();
    }
    SignIn(){
        let loading = this.loadingCtrl.create({
            content: 'Iniciando sesión. Por favor, espere...'
        });
        loading.present();

        this.authService.signInWithEmailAndPassword(this.userModel).then(result => {
            loading.dismiss();

            this.navCtrl.setRoot(HomePage);
        }).catch(error => {
            loading.dismiss();

            console.log(error);
            this.alert('Error', 'Ha ocurrido un error inesperado. Por favor intente nuevamente.');
        });
    }
    signUp() {
        this.navCtrl.push(RegisterPage);
    }
    alert(title: string, message: string) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }
}