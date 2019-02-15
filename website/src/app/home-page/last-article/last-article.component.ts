import { Component, OnInit } from '@angular/core';
import {SarticleService} from "../../sarticle.service";

@Component({
  selector: 'app-last-article',
  templateUrl: './last-article.component.html',
  styleUrls: ['./last-article.component.css']
})
export class LastArticleComponent implements OnInit {

  articleLast: any;

  constructor(
    private articleSvc: SarticleService
  ) { }

  ngOnInit() {
    this.articleSvc.getPost().then((data) => {
      this.articleLast = data;
    });
  }

}
