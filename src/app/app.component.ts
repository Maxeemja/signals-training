import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = signal([
    {
      id: 1,
      name: 'Milk',
      price: 5,
    },
    {
      id: 2,
      name: 'Bread',
      price: 2,
    },
    {
      id: 3,
      name: 'Eggs',
      price: 10,
    },
  ]);

  filterName = signal('');

  filteredProducts = computed(() => {
    return this.products().filter((product) =>
      product.name.toLowerCase().includes(this.filterName().toLowerCase()),
    );
  });

  onInput(e: Event) {
    this.filterName.set((e?.target as HTMLInputElement).value);
  }
}
