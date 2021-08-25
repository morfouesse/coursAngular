import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-routing-param',
  templateUrl: './routing-param.component.html',
  styleUrls: ['./routing-param.component.scss']
})
export class RoutingParamComponent implements OnInit {

  idRoute: string;
  idRouteSnapshot: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    // Subscribe
    this.router.paramMap.subscribe(
      params => {
        this.idRoute = params.get('id');
      }
    );

    // Snapshot
    this.idRouteSnapshot = this.router.snapshot.paramMap.get('id');
  }

}
