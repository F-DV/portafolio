import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessage:string='Hola bienvenid@, soy Felipe Quiceno Gomez.';
  screed_2:string='FullStack developer, te invito a conocer';
  screed_3:string='mas sobre mi y mi portafolio tecnologico.';
  screed_4:string='Continua explorando mis proyectos';
  screed_5:string='seguro te gustarán.';
  constructor() { }

  ngOnInit(): void {
  }



}
