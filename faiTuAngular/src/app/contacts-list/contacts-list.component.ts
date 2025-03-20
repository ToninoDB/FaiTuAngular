import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  imports: [],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent {
  contatti: Contatto[] = [];
}

class Contatto {
  nome: string;
  numero: string;
  email?: string;

  constructor(nome: string, numero: string, email: string) {
    this.nome = nome;
    this.numero = numero;
    this.email = email;
  }
}
