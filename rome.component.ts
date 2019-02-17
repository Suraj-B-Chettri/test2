import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-rome',
  templateUrl: './rome.component.html',
  styleUrls: ['./rome.component.css']
})
export class RomeComponent implements OnInit {

  constructor(private router: Router) { }

    title = 'animation';
    ngOnInit(){
      // $('#jun').click(function(){
      //   $('#tara').addClass('blue')
      // })
      $('.romegotoSigninleft').addClass('romegotoSignintoleft');
      $('.romeSignuppage').addClass('romeSignuppagetoright');
      setTimeout(function(){
        $('.romegotoSigninleft').removeClass('romegotoSignintoleft');
        $('.romeSignuppage').removeClass('romeSignuppagetoright');
      },2000)
        $('#gotoHome').click(function(){
         $('.romegotoSigninleft').addClass('romegotoSigninlefttoright')
         $('.romeSignuppage').addClass('romeSignuppagetoleft')
       })
     
    }
    tada(){
      // setTimeout(()=>{ 
      //   this.router.navigate(['/home'])
      // }, 2000);
      
    }

    tohome(){
      setTimeout(()=>{
        this.router.navigate(['/home'])
      },2000)
    }
  }
