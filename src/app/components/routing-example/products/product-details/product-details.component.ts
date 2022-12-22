import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: any = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.paramMap.get('productDetails');
  }
}
