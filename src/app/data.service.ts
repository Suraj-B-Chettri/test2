import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {INames} from './INames';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getData(): INames[]{
  return [
    {
      "name":"suraj",
      "address": "delhi"
    }, {
      "name":"uraj",
      "address": "delhi"
    }, {
      "name":"raj",
      "address": "kota"
    }, {
      "name":"kesav",
      "address": "kota"
    }, {
      "name":"resav",
      "address": "gurgaon"
    }, {
      "name":"binod",
      "address": "gurgaon"
    }, {
      "name":"suraj",
      "address": "jaipur"
    }, {
      "name":"suraj",
      "address": "jaipur"
    }
  ]
}


}
