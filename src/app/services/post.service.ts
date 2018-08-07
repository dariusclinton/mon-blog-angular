import { Injectable } from '@angular/core';
import { Post } from '../model/Post.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  createNewPost(post: Post) {
    this.posts.push(post);
    this.savePostsToServer();
    this.emitPosts();
  }

  removePost(indexToRemove: number) {
    this.posts.splice(indexToRemove, 1);
    this.savePostsToServer();
    this.emitPosts();
  }

  loveIts(indexOfPost: number) {
    const post = this.posts.find(
      (postEl: Post) => {
        return this.posts[indexOfPost] === postEl;
      }
    );
    post.loveIts++;
    this.savePostsToServer();
    this.emitPosts();
  }

  dontLoveIts(indexOfPost: number) {
    const post = this.posts.find(
      (postEl: Post) => {
        return this.posts[indexOfPost] === postEl;
      }
    );
    post.loveIts--;
    this.savePostsToServer();
    this.emitPosts();
  }

  savePostsToServer() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPostsFromServer() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      });
  }
}
