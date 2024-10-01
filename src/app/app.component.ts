import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signals-training';

  theme = signal('light');

  label = this.theme();

  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleDarkMode() {
    this.theme.update((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  }
}
