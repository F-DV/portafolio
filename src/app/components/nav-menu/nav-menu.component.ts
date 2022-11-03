import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Output() close = new EventEmitter<boolean>();

  closeMenu:boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  menuClose(){
    this.closeMenu = false;
    this.close.emit(this.closeMenu);
  }
}
