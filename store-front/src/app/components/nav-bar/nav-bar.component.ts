import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 	{ LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	private loggedIn:boolean = false;


  constructor(private loginService:LoginService) { }

  ngOnInit() {
  	this.loginService.checkSession().subscribe(
  			res => {
  				this.loggedIn = true;
  			}, error => {
  				this.loggedIn = false;
  			}
  		);

  }

  logout(){
  	this.loginService.logout().subscribe(
  			res => {
  				location.reload();
  			}, error => {
  				console.log(error);
  			}
  		);
  }


}
