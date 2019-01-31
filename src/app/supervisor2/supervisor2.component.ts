import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-supervisor2',
  templateUrl: './supervisor2.component.html',
  styleUrls: ['./supervisor2.component.css']
})
export class Supervisor2Component implements OnInit {

  names = []
  datas = []
  constructor(private data: DataService) { }

  ngOnInit() {

     this.datas = this.data.getData();
     let i;
     for(i= 0 ; i < this.datas.length ; i++){
      if(this.datas[i].address === "jaipur" || this.datas[i].address === "kota"  )
      this.names.push(this.datas[i])
      
     }
    }
  }
   

