import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  //Comunica al padre para que abra el menu
  @Output() openMenuNav = new EventEmitter<boolean>();

  constructor(){};

  toggleMenu(event:boolean){
    this.openMenuNav.emit(event);
  }
}
