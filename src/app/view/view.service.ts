import { Http, Response} from '@angular/http';
import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Vendor } from '../vendor';

@Injectable()
export class ViewService {

  constructor(private http: Http) {
  }

   //Fetch all vendors
    getAllVendors(): Observable<Vendor[]> {
        return this.http.get('http://localhost:8080/vendor/allVendors')
	       .map(this.extractData)
	       .catch(this.handleError);
        }

    private extractData(res: Response) {
	let body = res.json();
        return body;
    }

    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
}
