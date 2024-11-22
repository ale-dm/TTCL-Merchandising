import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
    _id?: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    private apiUrl = 'http://localhost:5000/api/products'; // Cambia la URL si es necesario

    constructor(private http: HttpClient) {}

    // Obtener todos los productos
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    // Crear un nuevo producto
    createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.apiUrl, product);
    }
}
