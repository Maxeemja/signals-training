import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  price = 19;

  quantity = signal(10);

  totalPrice = computed(() => this.price * this.quantity());

  changeQuantity(event: Event) {
    this.quantity.set((event?.target as HTMLInputElement).valueAsNumber);
  }
}
