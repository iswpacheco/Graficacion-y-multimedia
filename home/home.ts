import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AuthService} from '../../providers/auth-service';
import { RegisterPage } from '../register/register';
import { SigInPage } from "../sigin/Sigin";
import { ForumPage} from '../forum/forum';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public authService: AuthService) {

  }
  signIn(){
    this.navCtrl.push(SigInPage);
  }
  signOut(){
    this.authService.signOut();
    this.navCtrl.setRoot(SigInPage);
  }
  siguiente() {
    this.navCtrl.push(RegisterPage);
}
  foro(){
    this.navCtrl.push(ForumPage);
  }
  News(){
    this.navCtrl.push(NewsPage);
  }

}
