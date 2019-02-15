import {Component, Directive, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {CommentClass} from "../../comment-class";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})

export class CommentFormComponent {

  @Output() sent: EventEmitter<CommentClass> = new EventEmitter<CommentClass>();
  text = '';

  public onSent() {
    console.log('MessageComponent:', 'emit:', this.text);
    this.sent.emit(new CommentClass(this.text));
    this.text = '';
  }
}
