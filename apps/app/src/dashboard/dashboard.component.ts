import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'router-standalone-ang-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>dashboard works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
