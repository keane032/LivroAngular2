import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  habilitarBotao:	boolean	=	false;
	valores:	string	[]	=	[];

  constructor() { }

  ngOnInit() {
  }

  meuClick(): void{
    console.log('event meuClick');
  }

  digitou($event): void {
    console.log($event);
  }

  digitouVarTemplate(valor):	void	{
    console.log(valor);
}
  
adicionar(conteudo:	string):	void	{
  this.valores.push(conteudo);
}

}
