import { Routes } from "@angular/router";
import { ArticleDetailComponent } from "./article-detail.component";
import { ArticleListComponent } from "./article-list.component";
import { ArticleComponent } from "./article.component";

export const ARTICLE_ROUTES: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            {
                path: '',
                component: ArticleListComponent
            },
            {
                path: ':slug',
                component: ArticleDetailComponent
            }
        ]
    }
]