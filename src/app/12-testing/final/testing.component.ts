import { Component, OnInit } from '@angular/core';
import { TestingService } from './testing.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  count = 0;
  incrementValue = 0;

  isOk = false;

  constructor(private testingService: TestingService) { }

  ngOnInit() {
  }

  countIncrement() {
    this.count++;
  }

  incrementValueByService() {
    this.incrementValue = this.testingService.serviceTestFunction(this.incrementValue);
  }

  conditionFunction(value: boolean) {
    if (value) {
      this.isOk = true;
    } else {
      this.isOk = false;
    }
  }


}
