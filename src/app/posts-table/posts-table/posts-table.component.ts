import { Component, OnInit } from '@angular/core';
import { PostsTableService } from 'app/posts-table/posts-table/services/posts-table.service';
import { PostsNumberToDownloadCalculator } from 'app/posts-table/posts-table/services/posts-number-to-download-calculator.service';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.sass'],
  providers: [
    PostsTableService,
    PostsNumberToDownloadCalculator
  ]
})
export class PostsTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
