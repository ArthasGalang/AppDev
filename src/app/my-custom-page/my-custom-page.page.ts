import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-my-custom-page',
  templateUrl: './my-custom-page.page.html',
  styleUrls: ['./my-custom-page.page.scss'],
})
export class MyCustomPagePage implements OnInit {

  constructor(private router: Router) { }
  goToMyCustomPage() {
    this.router.navigate(['my-custom-page/my-custom-page-with-id',23 /**id */])
  }
  ngOnInit() {
  }

}
