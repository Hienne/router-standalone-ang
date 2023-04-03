import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-article-list',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>admin-article-list works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminArticleListComponent {}
