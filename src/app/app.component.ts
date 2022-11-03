import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeMenu:boolean = false;

  constructor(){

  }
   toggleMenu(isActive:boolean){
    this.activeMenu = isActive;
   }
}
