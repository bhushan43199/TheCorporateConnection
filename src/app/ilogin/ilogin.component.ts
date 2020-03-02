import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ilogin',
  templateUrl: './ilogin.component.html',
  styleUrls: ['./ilogin.component.scss']
})
export class IloginComponent implements OnInit {

  constructor(private router:Router) { }
  submit(){
    this.router.navigate(['/Admin']);
  }
  ngOnInit() {
  }

}
