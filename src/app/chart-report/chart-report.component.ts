import { Component, OnInit } from '@angular/core';
import { CourseEnquiryService } from '../shared/course-enquiry.service';
import { ResourceenquiryService } from '../shared/resourceenquiry.service';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-chart-report',
  templateUrl: './chart-report.component.html',
  styleUrls: ['./chart-report.component.css']
})
export class ChartReportComponent implements OnInit {

  result: any;
  enquiryCount: any;
  resourceName: any;
  courseenquiryCount: any;
  courseName: any;
  resourcechart: any[];
  coursechart: any[];

  constructor(public courseEnquiryService: CourseEnquiryService, public resourseEnquiryService: ResourceenquiryService) { }

  ngOnInit(): void {


// get api for Ressource count
    this.resourseEnquiryService.getResourceenquirycount().then((res) => {
      this.result = res;
      console.log(this.result);
      this.enquiryCount = this.result.map((pv: any) => pv.ResourceCount)
      this.resourceName = this.result.map((pv: any) => pv.ResourceName)
      console.log(this.enquiryCount);
      console.log(this.resourceName);

      this.resourcechart = new Chart("myresourceChart", {
        type: 'bar',
        data: {
          labels: this.resourceName,
          datasets: [{
            label: 'Resource equiry count',
            data: this.enquiryCount,
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
            }],
            xAxes: [{
              barPercentage: 0.4
            }]
          }

        }
      });





    })


// get api for course count
    this.courseEnquiryService.getCourseenquirycount().then((res) => {
      this.result = res;
      console.log(this.result);
      this.courseenquiryCount = this.result.map((pv: any) => pv.CourseCount)
      this.courseName = this.result.map((pv: any) => pv.CourseName)
      console.log(this.courseenquiryCount);
      console.log(this.courseName);



      this.coursechart = new Chart("mycourseChart", {
        type: 'bar',
        data: {
          labels: this.courseName,
          datasets: [{
            label: 'Course enquiry count',
            data: this.courseenquiryCount,
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
            }],
            xAxes: [{
              barPercentage: 0.4
            }]

          }

        }
      });


    })





  }




}


