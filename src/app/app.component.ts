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
  title = 'Angular HTTP Requests';

  public posts: Array<any>;
  public url: String;

  public loading: boolean;

  public error: boolean;

  constructor(
    private _postService: PostService
  ){
    this.posts = [];
    this.url = Global.url;
    this.error = false;
  }

  ngOnInit(){
    this.loading = true;
    this.getPosts();
  }

  getPosts(){
    
    this._postService.getPosts().subscribe( 
      response => {
        // this.posts = response.data;  FOR REQRES.IN
        this.posts = response;   
        this.loading = false;
      }, error => {
        this.error = true;
        this.loading = false;
      }
      
     )
     
  }

}
