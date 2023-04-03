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
    <p>App works</p>
    <a routerLink="article">Article</a>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'app';
}

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routes)
    ]  
  }
  ).catch((err) => console.error(err));
