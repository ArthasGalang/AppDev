import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

  templateUrl: './my-custom-page-with-id.html',

})
export class MyCustomPageWithId implements OnInit {

  constructor(private route: ActivatedRoute) { }
    id: any;
  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id')
  }

}
