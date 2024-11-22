import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,  // Asegúrate de que sea standalone
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    products: any[] = []; // Array para almacenar productos

    constructor(private productService: ProductsService) {}

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}