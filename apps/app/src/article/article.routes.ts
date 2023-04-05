import { Routes } from "@angular/router";
import { ArticleComponent } from "./article.component";
import { ArticleDetailComponent } from "./components/article-detail.component";
import { ArticleEditComponent } from "./components/article-edit.component";
import { ArticleListComponent } from "./components/article-list.component";
import { canEditArticleGuardFunctional, isAdminGuardFunctional } from "./guards/can-edit-article.guard";
import { canLeaveEditGuardFunctional } from "./guards/can-leave-edit.guard";

export const ARTICLE_ROUTES: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            {
                path: '',
                component: ArticleListComponent,
                title: 'List Article'
            },
            {
                path: ':slug',
                component: ArticleDetailComponent,
                title: 'Detail Article'
            },
            {
                path: ':slug/edit',
                component: ArticleEditComponent,
                title: 'Editting Article',
                // canActivate: [CanEditArticleGuard],
                // canDeactivate: [CanLeaveEditGuardGuard]
                canActivate: [canEditArticleGuardFunctional, isAdminGuardFunctional],
                canDeactivate: [canLeaveEditGuardFunctional]
            }
        ]
    }
]