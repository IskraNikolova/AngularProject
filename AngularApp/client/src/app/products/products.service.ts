import { Injectable } from '@angular/core';

import { HttpService } from './../core/http.service';

@Injectable()
export class ProductsService {
    constructor(private httpService: HttpService){ }

    addProduct (product) {
        return this.httpService
            .post('products/create', product, true);
    }

    allProducts (page = 1, search = null) {
        let url = `products/all?page=${page}`;

        if(search) {
            url += `&search=${search}`;
        }

        return this.httpService
            .get(url);
    }

    details(id) {
        return this.httpService
                .get(`products/details/${id}`, true);
    }

    like (id) {
        return this.httpService
            .post(`products/details/${id}/like`, {}, true)
    }

    allReviews (id) {
        return this.httpService
            .get(`products/details/${id}/reviews`, true)
    }

    submitReview (id, review) {
        return this.httpService
            .post(
                `products/details/${id}/reviews/create`, 
                review, 
                true);
    }

    mine () {
        return this.httpService
            .get('products/mine', true);
    }

    delete (id) {
        return this.httpService
            .post(`products/delete/${id}`, {}, true)
    }
}