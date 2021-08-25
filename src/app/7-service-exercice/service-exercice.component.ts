import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-service-exercice',
  templateUrl: './service-exercice.component.html',
  styleUrls: ['./service-exercice.component.scss']
})
export class ServiceExerciceComponent implements OnInit {

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  /***********************
   ********* USER ********
   ***********************/
  handleClickSetUser() {
    const newUser = new User('Erwan', 'Baccon', 30);
    this.storageService.storageSetItem(this.storageService.KEY_USER, newUser);
  }

  handleClickGetUser() {
    console.log('Get user from localstorage', this.storageService.storageGetItem(this.storageService.KEY_USER));
  }

  handleClickRemoveUser() {
    this.storageService.storageRemoveItem(this.storageService.KEY_USER);
  }

  /***********************
   ******** ANIMAL *******
   ***********************/

  handleClickSetAnimal() {
    const newAnimal = {name: 'Haglae', type: 'cat'};
    this.storageService.storageSetItem(this.storageService.KEY_ANIMAL, newAnimal);
  }

  handleClickGetAnimal() {
    console.log('Get animal from localstorage', this.storageService.storageGetItem(this.storageService.KEY_ANIMAL));
  }

  handleClickRemoveAnimal() {
    this.storageService.storageRemoveItem(this.storageService.KEY_ANIMAL);
  }

  /***********************
   ******** UTILS *******
   ***********************/

  handleClickClear() {
    this.storageService.storageClear();
  }

}
