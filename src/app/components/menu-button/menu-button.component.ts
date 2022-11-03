import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  //Comunica al padre para que abra el menu
  @Output() openMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  isOpenMenu:boolean = false;

  onOpenMenu(){
    this.isOpenMenu = true;
    this.openMenu.emit(this.isOpenMenu);
  }
}
