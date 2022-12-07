import { Component } from '@angular/core';
import { User } from './classes/user';
import { HttpCrudDemoService } from './services/http-crud-demo.service';
import { HttpServiceService } from './services/http-service.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclient-app';
  posts: any;
  postId: number = 0;

  constructor(private httpService: HttpServiceService,
    private userService: UserService,
    private crudService: HttpCrudDemoService) {
      this.userService.getUsers()
        .subscribe( (resp: User[]) => { console.log(resp); })
  }

  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); }
    );
  }
  
  getAllPosts() {
    this.crudService.getAllPosts().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); }
    )
  }

  getPostById() {
    this.crudService.getPostById(this.postId).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    )
  }

  addPost() {
    this.crudService.addPost({"userID": 1, "id": 999, "title": "Ajay", "body": "test by ajay"}).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    )
  }

  updatePost() {
    this.crudService.updatePost(101, {"userID": 1, "id": 101, "title": "Ajay", "body": "test by ajay singala"}).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    )
  }

  deletePost() {
    this.crudService.deletePost(101).subscribe(
      (response) => { console.log(response); },
      (error) => { console.log(error); }
    )
  }
}
