import { ResourceenquiryService } from "./resourceenquiry.service";

export class Resourceenquiry {
    ResourceEnquiryId:number;
    Query:string;
    EnquiryDate:Date=new Date();
    ResourceId:number;
    LeadId:number;
}
