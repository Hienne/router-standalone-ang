import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../article.servies';
import { getDetailArticle } from './article-detail.component';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <form class="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label for="title" class="sr-only">title</label>

        <div class="relative">
          <input
            type="text"
            name="title"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter title"
            [(ngModel)]="article.title"
          />
        </div>
      </div>

      <div>
        <label for="content" class="sr-only">Content</label>

        <div class="relative">
          <input
            type="text"
            name="content"
            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
            placeholder="Enter content"
            [(ngModel)]="article.content"
          />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <button
          (click)="save()"
          type="submit"
          class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Save
        </button>
      </div>
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleEditComponent {
  isEditing = true;
  article!: Article;

  constructor() {
    getDetailArticle().subscribe((article) => {
      this.article = article;
    });
  }

  save() {
    this.isEditing = false;
    console.log(this.isEditing);
  }
}
