import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas: string [] = ['joao','maria','angula','thiago'];

  constructor() {}

  getPessoas(): string [] {
    return this.nomesPessoas;
  }
 
  setPessoas(nome: string): void {
    this.nomesPessoas.push(nome);
  }

}
