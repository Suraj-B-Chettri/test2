import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {


  names = []
  datas = []
  constructor(private data: DataService) { }

  ngOnInit() {

     this.datas = this.data.getData();
     let i;
     for(i= 0 ; i < this.datas.length ; i++){
      if(this.datas[i].address === "delhi" )
      this.names.push(this.datas[i])
      
     }
   

  }
}
