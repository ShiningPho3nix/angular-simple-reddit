import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles: Array<Article>;

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 'Die offizielle Angular Seite, super!', 3),
      new Article('Fullstack', 'http://fullstack.io', 'Die ofizielle Fullstack website!', 2),
      new Article('Angular Homepage', 'http://angular.io', 'Die offizielle Angular Seite, super!', 1),
      new Article('Steffens großartiger Plan!', 'http://steffen.de', 'Steffen.de gibt es wirklich, cool!', 69),
      new Article('Ramón hatte eine Idee UwU', 'http://reddit.com', 'Reddit halt...', 420),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement, desc: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, desc.value));
    title.value = '';
    link.value = '';
    desc.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    this.articles.forEach(line => console.log(line));
    return this.articles.sort((a: Article, b: Article) => (b.votes - a.votes));
  }
}
