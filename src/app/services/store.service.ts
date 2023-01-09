import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

const STORE_BASE_URL = "https://fakestoreapi.com";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private HttpClient: HttpClient) {}

  getAllProducts(
    limit = 12,
    sort = "desc",
    category?: string
  ): Observable<Array<Product>> {
    return this.HttpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? "/category/" + category : ""
      }?sort=${sort}&limit=${limit}`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.HttpClient.get<Array<string>>(
      `${STORE_BASE_URL}/products/categories`
    );
  }
}
