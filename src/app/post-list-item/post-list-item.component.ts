import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: string;

  loveIts: number;
  dontLoveIts: number;

  constructor() { }

  ngOnInit() {
    this.loveIts = 0;
    this.dontLoveIts = 0;
  }

  onLoveIt() {
    this.loveIts++;
  }

  onDontLoveIt() {
    this.dontLoveIts++;
  }

  checkLoveItsSuccess() {
    if (this.loveIts > 0) {
      return this.loveIts > this.dontLoveIts;
    } else {
      return false;
    }
  }


  checkLoveItsDanger() {
    if (this.loveIts > 0) {
      return this.loveIts < this.dontLoveIts;
    } else {
      return false;
    }
  }

}
