import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-managernav',
  templateUrl: './managernav.component.html',
  styleUrls: ['./managernav.component.css']
})
export class ManagernavComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  LogOut()
  {
   
    this.authService.LogOut();
    this.route.navigateByUrl("login");

  }

}
