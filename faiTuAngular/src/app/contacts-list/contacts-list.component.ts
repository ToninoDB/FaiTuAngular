import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/core';

interface Contatto {
  nome: string;
  numero: string;
  email?: string;
}

@Component({
  selector: 'app-contacts-list',
  imports: [NgIf, NgFor, FormsModule],
  standalone: true,
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css',
})
export class ContactsListComponent {
  contatti: Contatto[] = [
    { nome: 'Luigi', numero: '3495459837', email: '' },
    { nome: 'Raimondo', numero: '34954534837', email: 'rai@example.com' },
  ];

  newContatto: Contatto = {
    nome: '',
    numero: '',
    email: '',
  };

  addContatto(): void {
    if (this.newContatto.nome && this.newContatto.numero) {
      this.contatti.push({
        nome: this.newContatto.nome,
        numero: this.newContatto.numero,
        email: this.newContatto.email,
      });

      this.newContatto = { nome: '', numero: '', email: '' };
    }
  }

  removeContatto(index: number): void {
    this.contatti.splice(index, 1);
  }
}
