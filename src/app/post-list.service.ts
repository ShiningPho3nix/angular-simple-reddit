import { Injectable } from '@angular/core';
import { Article } from './article.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Klasse ist ein Service, welcher die Initiale Liste der Article besitzt und diese and die ArticleListComponent weitergibt.
 */
export class PostListService {

  articles: Array<Article> = [
    new Article('Angular', 'http://angular.io', 'Die offizielle Angular Seite, super!', 3),
    new Article('Fullstack', 'http://fullstack.io', 'Die ofizielle Fullstack website!', 2),
    new Article('Angular Homepage', 'http://angular.io', 'Die offizielle Angular Seite, super!', 1),
    new Article('Steffens großartiger Plan!', 'http://steffen.de', 'Steffen.de gibt es wirklich, cool!', 69),
    new Article('Ramón hatte eine Idee UwU', 'http://reddit.com', 'Reddit halt...', 420),
  ];

  /*
  BehaviorSubject speichert den zu letzt übermittelten Wert ab.
  Subscribed ein client, so wird dieser letzte Wert automatisch übertragen.
  Auch wenn der Client erst viel später Subscribed.
  */
  private articleListSource = new BehaviorSubject<Article[]>(this.articles);
  articleList = this.articleListSource.asObservable();

  /**
   * Fügt einen neuen Artikel der Liste an Artikeln hinzu, sodass dieser ebenfalls weiter und ausgegeben wird.
   *
   * @param article Fügt den übergebenen Artikel der Liste an Artikeln hinzu.
   */
  addNewArticle(article: Article) {
    console.log(`addNewArticle postList: ${article.title}`);
    this.articles.push(article);
  }
}
