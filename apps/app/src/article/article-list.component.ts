import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Article, ArticleService } from './article.servies';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="article$ | async as articles; else loadingTmpl" class="flex flex-wrap gap-2">
        <a *ngFor="let article of articles"
          class="block rounded-xl border border-gray-800 bg-gray-900 p-4 shadow-xl sm:p-6 lg:p-8"
          [routerLink]="article.slug"
        >
          <h3 class="mt-3 text-lg font-bold text-white sm:text-xl">
            {{ article.title }}
          </h3>

          <p class="mt-4 text-sm text-gray-300">
            {{ article.content }}
          </p>
        </a>
    </div>
    <ng-template #loadingTmpl> Loading... </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
  article$: Observable<Article[]> = inject(ArticleService).getArticles();
}
