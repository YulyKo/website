import { Component, OnInit } from '@angular/core';
import {SarticleService} from "../sarticle.service";

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {

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
