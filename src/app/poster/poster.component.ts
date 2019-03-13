import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { PostListService } from '../post-list.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  latestArticle: Article;

  constructor(private postList: PostListService) { }

  addPost(title: HTMLInputElement, link: HTMLInputElement, desc: HTMLInputElement): boolean {
    this.latestArticle = new Article(title.value, link.value, desc.value);
    title.value = '';
    link.value = '';
    desc.value = '';
    this.postList.addNewArticle(this.latestArticle);
    return false;
  }

  ngOnInit() {
  }

}
