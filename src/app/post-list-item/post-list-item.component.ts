import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: string;
  @Input() loveIts: number;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.loveIts(this.index);
  }

  onDontLoveIt() {
    this.postService.dontLoveIts(this.index);
  }

  checkLoveItsSuccess() {
    return this.loveIts > 0;
  }

  checkLoveItsDanger() {
    return this.loveIts < 0;
  }

  onDelete() {
    this.postService.removePost(this.index);
  }


}
