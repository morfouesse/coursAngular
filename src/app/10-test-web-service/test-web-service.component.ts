import { Component, OnInit } from '@angular/core';
import { UserWebService } from '../shared/webservices/user.webservice';
import { PostWebService } from '../shared/webservices/post.webservice';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-test-web-service',
  templateUrl: './test-web-service.component.html',
  styleUrls: ['./test-web-service.component.scss']
})
export class TestWebServiceComponent implements OnInit {

  userList: any[];
  constructor(
    private userWebService: UserWebService,
    private postWebService: PostWebService
  ) { }

  ngOnInit() {
    // Users
    this.getUser();

    // Posts
    this.getPosts();
    this.getPost(1);
  }

  getPost(idPost) {
    this.postWebService.getPost(idPost).subscribe(
      (valuePost) => {
        console.log('valuePost getPost : ', valuePost);
      }, (error) => {
        console.error('TestWebServiceComponent getPost :', error);
      }
    );
  }

  getPosts() {
    this.postWebService.getPosts().subscribe(
      (values) => {
        console.log('Values getPosts : ', values);
      }, (error) => {
        console.error('TestWebServiceComponent getPosts :', error);
      }
    );
  }

  getUser() {
    this.userWebService.getUsers().subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent getUsers', data);
        this.userList = data;
      }, (error) => {
        console.error(error);
      }
    );
  }

  addUser() {
    const userToAdd = new User('Erwan', 'Baccon', 29);
    this.userWebService.addUser(userToAdd).subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent addUser', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  updateUser() {
    const userToUpdate = new User('Erwan2', 'Baccon2', 29);
    this.userWebService.updateUser(userToUpdate, 10).subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent updateUser', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

  deleteUser() {
    this.userWebService.deleteUser(10).subscribe(
      (data) => {
        // getUsers Next
        console.log('TestWebServiceComponent deleteUser', data);
      }, (error) => {
        console.error(error);
      }
    );
  }

}
