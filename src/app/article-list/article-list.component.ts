import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Array<Article>;

  constructor(private posting: PostListService) {
  }

  sortedArticles(): Article[] {
    this.posting.articleList.subscribe(latestArticleArr => this.articles = latestArticleArr);
    return this.articles.sort((a: Article, b: Article) => (b.votes - a.votes));
  }

  ngOnInit() {
    this.posting.articleList.subscribe(latestArticleArr => this.articles = latestArticleArr);
  }
}
