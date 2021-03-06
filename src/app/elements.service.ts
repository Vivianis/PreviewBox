import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ElementsSet } from './preview/elements';

@Injectable()
export class FileService {
    constructor(private http: Http) { }

    getElements(fileName): Promise<ElementsSet> {
        return this.http.get(`/api/${fileName}`)
            .toPromise()
            .then(response => response.json() as ElementsSet)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}