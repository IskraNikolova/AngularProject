import { Injectable } from '@angular/core';
import { HttpService } from '../core/http.service';

@Injectable()
export class AdminService{
    constructor(private httpService: HttpService){ }

    allUsers (){
        return this.httpService
            .get('stats/users/all');
    }

    delete (id) {
        return this.httpService
            .post(`stats/users/delete/${id}`, {}, true)
    }
}