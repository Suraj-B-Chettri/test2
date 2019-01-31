import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
names = []
  constructor(private data: DataService) { }

  ngOnInit() {

    this.names = this.data.getData();

  }

}
