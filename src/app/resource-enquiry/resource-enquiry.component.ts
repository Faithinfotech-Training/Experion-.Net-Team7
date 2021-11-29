import { Component, OnInit } from '@angular/core';
import {Resourceenquiry} from '../shared/resourceenquiry';
import {Lead} from "../shared/lead";
import {ResourceenquiryService} from "../shared/resourceenquiry.service"
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {LeadService} from '../shared/lead.service'

@Component({
  selector: 'app-resource-enquiry',
  templateUrl: './resource-enquiry.component.html',
  styleUrls: ['./resource-enquiry.component.css']
})
export class ResourceEnquiryComponent implements OnInit {
  resourceEnquiry:Resourceenquiry=new Resourceenquiry();
  lead:Lead=new Lead();
  ResourceId:number;

  constructor(public resourceEnquiryService:ResourceenquiryService,private router:Router,public leadService:LeadService,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    //get snapshot
    this.ResourceId=this.route.snapshot.params['ResourceId'];
    this.resourceEnquiryService.formData.ResourceId=this.ResourceId;

  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    //insert
    this.insertLead(form);
    // this.insertResourceEnquiry(form);
  }

  //insert lead
  insertLead(form?:NgForm){
    console.log("Inserting a lead record...");
    this.leadService.insertLead(form.value).subscribe(
      (result)=>{
        console.log(result);
        form.value.LeadId=result;
        console.log(this.resourceEnquiryService.formData.LeadId);
        this.insertResourceEnquiry(form);

        // this.resetForm(form);
        // this.toastrService.success("Employee Record has been Inserted",'EmpAppv2021');
      }
    ); 
  }

  //insert resource enquiry
    //insert lead
    insertResourceEnquiry(form?:NgForm){
    console.log("Inserting an enquiry...");
    console.log(form.value);
    this.resourceEnquiryService.insertResourceEnquiry(form.value).subscribe(
      (result)=>{
        console.log(result);
        // this.resetForm(form);
        // this.toastrService.success("Employee Record has been Inserted",'EmpAppv2021');
      }
    ); 
  }

}


