import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { BehaviorSubject, Observable, finalize, map, mergeMap } from 'rxjs';
import { Article, ArticleService } from '../article.servies';

export const getDetailArticle = (): Observable<Article> => {
  return inject(ActivatedRoute).params.pipe(
    map((params: Params) => params['slug']),
    mergeMap((slug) => inject(ArticleService).getArticleBySlug(slug))
  );
};

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="article">
      <h1>{{ article.title }}</h1>
      <p class="mb-3">{{ article.content }}</p>
      <a routerLink="edit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</a>
    </div>
    <ng-template #loadingTmpl> Loading... </ng-template>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleDetailComponent {
  article!: Article;
  loading$ = new BehaviorSubject(false);
  constructor() {
    this.loading$.next(true);
    getDetailArticle()
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe((res) => (this.article = res));
  }
}
