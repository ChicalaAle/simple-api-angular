import { Component, OnInit } from '@angular/core';
import { Global } from './services/global';
import { PostService } from './services/post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent implements OnInit{
  title = 'foro-angular';

  public posts: Array<any>;
  public url: String;

  public error: boolean;

  constructor(
    private _postService: PostService
  ){
    this.posts = [];
    this.url = Global.url;
    this.error = false;
  }

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this._postService.getPosts().subscribe( 
      response => {
        // this.posts = response.data;  FOR REQRES.IN
        this.posts = response;   
        console.log(this.posts)
      }, error => {
        this.error = true;
        console.log(error)
      }
     )
  }

}
