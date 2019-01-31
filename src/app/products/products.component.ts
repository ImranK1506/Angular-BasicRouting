import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  goToProduct(id: string): void {
    this.router.navigate(
      ['./', id],
      {relativeTo: this.activatedRoute});
  }
}
