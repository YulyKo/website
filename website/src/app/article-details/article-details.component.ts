import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SarticleService} from "../sarticle.service";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: any;
  articleId: number;

  constructor(
    private articleSvc: SarticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleId = params.id;
    });

    this.articleSvc.getPostById( this.articleId).then( (data) => {this.article = data} );
  }

}
