import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { ArticleService } from './article/article.servies';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  articleService = inject(ArticleService);

  currentUser = {
    username: 'Hien',
    isAdmin: true
  }

  isAuthor(slug: string | null) {
    console.log(slug);
    if (!slug) {
      return false;
    }

    return this.articleService.getArticleBySlug(slug).pipe(map(article => article.author === this.currentUser.username));
  }
}
