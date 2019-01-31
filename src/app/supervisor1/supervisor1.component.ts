import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-supervisor1',
  templateUrl: './supervisor1.component.html',
  styleUrls: ['./supervisor1.component.css']
})
export class Supervisor1Component implements OnInit {

  names = []
  datas = []
  constructor(private data: DataService) { }

  ngOnInit() {

     this.datas = this.data.getData();
     let i;
     for(i= 0 ; i < this.datas.length ; i++){
      if(this.datas[i].address === "delhi" || this.datas[i].address === "gurgaon"  )
      this.names.push(this.datas[i])
      
     }
   

  }
}
