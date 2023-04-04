import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';

export interface Article {
  id: string;
  slug: string;
  title: string;
  author: string;
  content: string;
  updateAt: string;
}

const Articles: Article[] = [
  {
    id: '1',
    slug: 'bai-viet-1',
    title: 'Bai viet 1',
    content: 'Day la noi dung bai viet 1',
    updateAt: '2020-07-06T13:26:31.785Z',
    author: 'TiepPhan',
  },
  {
    id: '2',
    slug: 'bai-viet-2',
    title: 'Bai viet 2',
    content: 'Day la noi dung bai viet 2 nhe ',
    updateAt: '2020-07-15:00:00.000Z',
    author: 'ChauTran',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ArticleService {

  getArticles(): Observable<Article[]> {
    return of(Articles).pipe(delay(500));
  }

  getArticleBySlug(slug: string | null): Observable<Article> {
    const article = Articles.find((x) => x.slug === slug);
    return of(article).pipe(
      map(article => {
        if (article !== undefined) return article;
        return {} as Article;
      })
    );
  }
}
