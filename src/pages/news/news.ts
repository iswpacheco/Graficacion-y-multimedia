import { Component } from "@angular/core";
import { NavController, NavParams} from "ionic-angular";
import { DomSanitizer } from "@angular/platform-browser";



@Component({
    selector:'page-news',
    templateUrl:'news.html'
})
    
export class NewsPage{
    vid ="https://www.youtube.com/embed/eJnQBXmZ7Ek";
    constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer){
        
    }
    sanitize(vid){
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    }
}