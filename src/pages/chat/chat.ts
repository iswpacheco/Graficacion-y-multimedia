import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
      this._chatSubscription = this.db.list('/chat').subscribe( data => {
        this.messages = data;
      });
    }

    sendMessage() {
      this.db.list('/chat').push({
        username: this.username,
        message: this.message
      }).then( () => {
        // message is sent
      }).catch( () => {
        // some error. maybe firebase is unreachable
      });
      this.message = '';
    }

    ionViewDidLoad() {
      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} Entro a la sala de chat`
      });
    }

    ionViewWillLeave(){
      this._chatSubscription.unsubscribe();
      this.db.list('/chat').push({
        specialMessage: true,
        message: `${this.username} Dejo la sala de chat`
      });
    }
  }
  
 
