import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }

  LogOut()
  {
   
    this.authService.LogOut();
    this.route.navigateByUrl("login");

  }

}
