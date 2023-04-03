import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>article-detail works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailComponent {}
