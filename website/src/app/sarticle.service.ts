import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SarticleService {

  constructor(
    private http: HttpClient
  ) { }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

  getPostById( id: number ) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id).toPromise();
  }

  getCommentsByPostId( postId: number ) {
    return this.http.get('https://jsonplaceholder.typicode.com/post/' + postId + '/comments').toPromise();
  }

  getUserId(id: number ) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id ).toPromise();
  }

}
