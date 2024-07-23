import { injectLoad } from '@analogjs/router';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

import { load } from './index.server';

@Component({
  imports: [MatTab, MatTabGroup],
  selector: 'app-home',
  standalone: true,
  template: `<mat-tab-group>
    @for(client of data().clients; track client.id) {
    <mat-tab [label]="client.slug"> {{ client.name }}</mat-tab>
    }
  </mat-tab-group>`,
})
export default class HomeComponent {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
