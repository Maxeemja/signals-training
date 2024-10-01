import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allProducts: Product[] = [
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
  ];
}
