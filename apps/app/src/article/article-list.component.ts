import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'router-standalone-ang-article-list',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>article-list works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {}
