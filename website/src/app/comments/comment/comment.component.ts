import {Component, Input, OnInit} from '@angular/core';
import {CommentClass} from "../../comment-class";
import {SarticleService} from "../../sarticle.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent{

  @Input()
  comment;

  public _comment: CommentClass;

  @Input() set commentBody(newComment: CommentClass) {
    this._comment = newComment;
  }

  constructor( ) { }


}
