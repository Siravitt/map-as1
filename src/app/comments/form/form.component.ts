import { Component, OnInit } from '@angular/core';

import { CommentsService } from 'src/app/services/comment.service';

import IComment from 'src/app/models/comment.model';

const initialComment: IComment = {
  name: '',
  comment: '',
  date: new Date(),
};

@Component({
  selector: 'app-form',

  templateUrl: './form.component.html',

  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  comment: IComment = { ...initialComment };

  idx: number = -1;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.editEmitter.subscribe((object: any) => {
      this.comment = { ...object };
    });

    this.commentsService.index.subscribe((idx: any) => {
      this.idx = idx;
    });
  }

  onSubmit() {
    if (this.commentsService.isEdit) {
      this.commentsService.comments[this.idx] = { ...this.comment };

      this.comment = { ...initialComment };

      this.commentsService.isEdit = false;
    } else {
      this.comment.date = this.comment.date.toLocaleString('en-US', {
        month: 'short',

        day: '2-digit',

        year: 'numeric',

        hour: '2-digit',

        minute: '2-digit',

        hour12: true,
      });

      this.commentsService.addComment(this.comment);

      this.comment = { ...initialComment };
    }
  }
}
