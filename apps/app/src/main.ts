import { bootstrapApplication } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav
      aria-label="Site Nav"
      class="mx-auto flex max-w-3xl items-center justify-between p-4"
    >
      <a
        href="/"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
      >
        <span class="sr-only">Logo</span>
        👋
      </a>

      <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li class="hidden lg:block">
          <a class="rounded-lg px-3 py-2" routerLink="article"> Home </a>
        </li>

        <li><a class="rounded-lg px-3 py-2" routerLink="admin"> Admin </a></li>
      </ul>
    </nav>
    <div class="mx-auto max-w-3xl p-4">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
