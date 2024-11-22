// src/app/components/catalog/catalog.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product.service';

@Component({
    selector: 'app-catalog',
    standalone: false,
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
    products: any[] = [];

    constructor(private ProductsService: ProductsService) {}

    ngOnInit(): void {
        this.ProductsService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }
}
