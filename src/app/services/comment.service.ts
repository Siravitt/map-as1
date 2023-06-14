import { Injectable, EventEmitter } from '@angular/core';

import IComment from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  editEmitter = new EventEmitter<IComment>();
  index = new EventEmitter<number>();
  
  comments: IComment[] = [];
  isEdit = false;

  constructor() {}

  addComment(value: IComment) {
    this.comments.push(value);
  }

  sendEditComment(idx: number) {
    this.editEmitter.emit(this.comments[idx]);
    this.index.emit(idx);
    this.isEdit = true;
  }

  deleteComment(idx: number) {
    this.comments.splice(idx, 1);
  }
}
