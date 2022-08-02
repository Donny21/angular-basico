import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <!-- Contador metodo 1 -->
    <button (click)="numero1 = numero1 + 1">+ 1</button>

    <span>{{ numero1 }}</span>

    <button (click)="numero1 = numero1 - 1">- 1</button>

    <br />
    <br />

    <!-- Contador metodo 2 -->
    <button (click)="sumar()">+ 1</button>

    <span>{{ numero2 }}</span>

    <button (click)="restar()">- 1</button>

    <br />
    <br />

    <!-- Contador metodo 3 -->
    <button (click)="acumular(+1)">+ 1</button>

    <span>{{ numero3 }}</span>

    <button (click)="acumular(-1)">- 1</button>

    <br />
    <br />

    <!-- TAREA -->
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular2(base)">+ {{ base }}</button>

    <span>{{ numero4 }}</span>

    <button (click)="acumular2(-base)">- {{ base }}</button>
  `,
})
export class ContadorComponent {
  title = 'Contador';
  // Contador metodo 1
  numero1: number = 10;

  numero2: number = 10;
  numero3: number = 10;
  numero4: number = 10;
  base: number = 5;

  // Contador metodo 2
  sumar() {
    this.numero2 += 1;
  }

  restar() {
    this.numero2 -= 1;
  }

  // Contador metodo 3
  acumular(valor: number) {
    this.numero3 += valor;
  }

  // TAREA metodo 4
  acumular2(valor: number) {
    this.numero4 += valor;
  }
}
