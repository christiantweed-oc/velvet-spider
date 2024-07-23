import { injectLoad } from '@analogjs/router';
import { Component, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { load } from './index.server';

@Component({
  imports: [MatTab, MatTabGroup],
  selector: 'app-home',
  standalone: true,
  template: ` <mat-tab-group>
    <mat-tab label="First"> Content 1 </mat-tab>
    <mat-tab label="Second"> Content 2 </mat-tab>
    <mat-tab label="Third"> Content 3 </mat-tab>
  </mat-tab-group>`,
  styles: [
    `
      .logo {
        will-change: filter;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .read-the-docs {
        color: #888;
      }
    `,
  ],
})
export default class HomeComponent {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
