import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = input.required<Product[]>();

  totalPrice = computed(() => this.products().length * 5);
}
