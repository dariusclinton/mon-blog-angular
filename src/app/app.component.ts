import { Component } from '@angular/core';
import { Post } from './model/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
  Cras tincidunt ac magna sed aliquam. Ut iaculis justo quam, a lacinia ipsum \
  commodo imperdiet. Cras aliquet commodo eros, eu ultrices turpis hendrerit non. \
  Cras accumsan sem molestie efficitur tempus. Vestibulum sollicitudin tincidunt tincidunt.\
   Praesent quis justo ornare, cursus nisi eget, pharetra sem. Pellentesque laoreet turpis leo. \
   Ut ullamcorper cursus aliquet. Morbi a lectus id enim ultricies gravida. Fusce a dolor dolor. \
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  posts: Array<Post> = [
    new Post('Mon premier post', this.content),
    new Post('Mon deuxieme post', this.content),
    new Post('Mon troisieme post', this.content),
  ];


}
