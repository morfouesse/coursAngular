import { Component, OnInit } from '@angular/core';
import { TestSharedService } from '../../shared/services/test-shared.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private testSharedService: TestSharedService) { }

  ngOnInit() {
    this.testSharedService.testService();
  }

}
