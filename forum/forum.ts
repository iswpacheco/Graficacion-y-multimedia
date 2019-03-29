import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AuthService} from '../../providers/auth-service';

import { HomePage } from "../home/home";

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html'
})
export class ForumPage {

  constructor(public navCtrl: NavController,
    public authService: AuthService) {

  }
  
  back(){
    this.navCtrl.push(HomePage);
  }

}