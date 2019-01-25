import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { NewsPage } from '../pages/news/news';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyBF7BHYdtssUzW4uXvH_43FSxguFoJjUcA",
    authDomain: "chat-4b33e.firebaseapp.com",
    databaseURL: "https://chat-4b33e.firebaseio.com",
    projectId: "chat-4b33e",
    storageBucket: "chat-4b33e.appspot.com",
    messagingSenderId: "170162997170"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    NewsPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    NewsPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
