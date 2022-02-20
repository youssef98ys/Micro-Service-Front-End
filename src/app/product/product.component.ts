import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data => this.products = data);
  }

  supprimerProduct(id: number) {
    this.service.deleteProduct(id).subscribe();
  }
}
