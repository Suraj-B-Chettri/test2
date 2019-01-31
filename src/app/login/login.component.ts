import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
arr :any;
username : any;
password: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  sab(form) {
    this.arr = form.value;
    this.username= this.arr.fullName;
    this.password = this.arr.password;
    if(this.username= "manager" && this.password == "manager"){
      this.router.navigate(['/manager'])
    }
    else if(this.username= "supervisor1" && this.password == "supervisor1"){
      this.router.navigate(['/supervisor1'])
    } 
    else if(this.username= "supervisor2" && this.password == "supervisor2"){
      this.router.navigate(['/supervisor2'])
    }
    else if(this.username= "employee1" && this.password == "employee1"){
      this.router.navigate(['/employee1'])
    }
    else{
   window.alert("username/password doesnot matched")
    }
}
}
