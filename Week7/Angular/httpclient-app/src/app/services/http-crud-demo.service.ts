import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCrudDemoService {

  url: String = "";

  constructor(private http: HttpClient) { 
    this.url = "https://jsonplaceholder.typicode.com";
  }

  public getAllPosts()  {
    console.log("HTTP CRUD DEMO...");
    let endPoints = "/posts";
    return this.http.get(this.url + endPoints);
  }

  public getPostById(postId: number) {
    let id: number = postId;
    //let id: number = 1;
    console.log("Got id: " +  id);
    let endpoints = "/posts/" + id;
    return this.http.get(this.url + endpoints);
  }

  // Does not actually create the data on the API, just simulates.
  public addPost(postData: Object) {
    let endpoints = "/posts";
    return this.http.post(this.url + endpoints, postData);
  }

  // Does not actually update the data on the API, just simulates.
  public updatePost(id: number, postData: Object) {
    id = 1;   // Hard-coded because it does not actually "UPDATE" data via PUT.
    console.log("PUT: Got id: " +  id);
    let endPoints = "/posts/" + id;
    return this.http.put(this.url + endPoints, postData);
  }

  public deletePost(id: number) {
    id = 1;   // Hard-coded because it does not actually "DELETE" data via DELETE.
    let endPoints = "/posts/" + id;
    return this.http.delete(this.url + endPoints);
  }
}
