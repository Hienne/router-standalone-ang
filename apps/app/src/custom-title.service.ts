import { Injectable, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
    TitleStrategy,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { Article, ArticleService } from './article/article.servies';

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
    constructor(private readonly title: Title) {
        super();
    }

    override updateTitle(snapshot: RouterStateSnapshot): void {
        const title = this.buildTitle(snapshot);
        if (title !== undefined) {
            this.title.setTitle(`My App - ${title}`);
        }
    }
    
}

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailTitleResolve implements Resolve<string> {
  articleService = inject(ArticleService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): string | Observable<string> | Promise<string> {
    return this.articleService
      .getArticleBySlug(route.paramMap.get('slug'))
      .pipe(map((article: Article) => article.title));
  }
}
