import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ProductList } from './models/product-list'
import { ProductCreate } from './models/product-create'

const baseUrl = 'https://miramore-2bd96.firebaseio.com/products'

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) {

    }

    getAllProducts() {
        
        return this.http.get(`${baseUrl}.json`)
            .pipe(map((res: Response) => {
                const ids = Object.keys(res);
                const products: ProductList[] = [];
                for (const i of ids) {
                    products.push(new ProductList(i, res[i].name,
                        res[i].imageUrl, res[i].category, res[i].price));
                }
                return products;
            }));
    }

    createProduct(body: ProductCreate) {
        return this.http.post(`${baseUrl}.json`, body);
    }


    getById(productId: string) {
        return this.http.get<ProductList>(`${baseUrl}/${productId}/.json`);
    }

    editProduct(body) {
        return this.http.patch(`${baseUrl}.json`, body);
    }

    deleteProduct(productId: string) {
        return this.http.delete(`${baseUrl}/${productId}/.json`);
    }

}