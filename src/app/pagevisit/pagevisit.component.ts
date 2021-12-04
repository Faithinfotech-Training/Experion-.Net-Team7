import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { PageVisitService } from '../shared/page-visit.service';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-pagevisit',
  templateUrl: './pagevisit.component.html',
  styleUrls: ['./pagevisit.component.css']
})
export class PagevisitComponent implements OnInit {

  page:number=1;
  filter:string;
 
  result:any;
   pagec:any;
   pagen:any;
   myChart:any[];
  constructor(public pagevisitService:PageVisitService,private route:Router,private authService:AuthService) { }

  ngOnInit(): void {

    this.pagevisitService.bindPageVisit();
    this.pagevisitService.getpageVisit().then((res)=>
    {
        this.result=res;
        console.log(this.result);
         this.pagec=this.result.map((pv:any)=>pv.PageCount)
         this.pagen=this.result.map((pv:any)=>pv.PageName)
         console.log(this.pagec);
        console.log(this.pagen);


         this.myChart = new Chart("myChart", {
            type: 'bar',
            data: {
                labels:this.pagen,
                datasets: [{
                    label: 'page visit count',
                    data: this.pagec,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                      ],
                      hoverOffset: 4,
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                    ,
            xAxes: [{
              barPercentage: 0.4
          }]
                }
            
            }
        });


    })

  }

  
 LogOut()
 {
  
   this.authService.LogOut();
   this.route.navigateByUrl("login");

 }

 IsAdmin()
 {
   if(localStorage.getItem("Access_Role")==='1')
   {
     return true;
   }
   else{
     return false;
   }

 }
 IsManager()
 {
   if(localStorage.getItem("Access_Role")==='2')
   {
     return true;
   }
   else{
     return false;
   }

 }

}
