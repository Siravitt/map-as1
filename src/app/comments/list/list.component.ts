import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comment.service';

import IComment from 'src/app/models/comment.model';

@Component({
  selector: 'app-list',

  templateUrl: './list.component.html',

  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  newComments: IComment[] = [];

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.newComments = this.commentsService.comments;
  }

  editHandler(idx: number) {
    this.commentsService.sendEditComment(idx);
  }

  deleteHandler(idx: number) {
    this.commentsService.deleteComment(idx);
  }
}
