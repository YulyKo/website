import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import { SarticleService } from "../sarticle.service";
import {ActivatedRoute} from "@angular/router";
import {CommentClass} from "../comment-class";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CommentsComponent implements OnInit {

  comments: any;
  article_id: number;

  constructor(
    private articlesSvc: SarticleService,
    private route: ActivatedRoute
) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.article_id = params.id;
    });
    this.articlesSvc.getCommentsByPostId(this.article_id).then((data) => {this.comments = data});
  }

  public onCommentSend(comment: CommentClass): void {
    console.log('ParentComponent', 'reseive new message', comment.body);
    debugger;
    this.comments.push(comment);
    console.log('ParentComponent', 'comments ', this.comments);
  }

}
