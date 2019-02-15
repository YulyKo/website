import { Component, OnInit } from '@angular/core';
import { SarticleService } from "../sarticle.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  articles: any;

  constructor(
    private articleSvc: SarticleService
  ) { }


  ngOnInit() {
    this.articleSvc.getPost().then((data) => {
      this.articles = data;
    });
  }

}
