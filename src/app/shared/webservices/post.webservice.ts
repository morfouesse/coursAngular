import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostWebService {
    constructor(private http: HttpClient) { }
    /**
     * Retreive all Posts
     */
    getPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    /**
     * Retreive one post by id
     * @param idPost
     */
    getPost(idPost: number) {
        return this.http.get('https://jsonplaceholder.typicode.com/posts/' + idPost);
    }

}