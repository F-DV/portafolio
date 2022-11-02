import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @Output() openMenu = new EventEmitter<boolean>();

  isOpenMenu:boolean = false;

  onOpenMenu(){
    this.isOpenMenu = !this.isOpenMenu;
    console.log(this.isOpenMenu);
    this.openMenu.emit(this.isOpenMenu);
  }

}
