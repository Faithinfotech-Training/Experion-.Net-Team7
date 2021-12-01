export class ResourceEnquiryModel {
    LeadId:number;
    LeadName:string;
    LeadContact:number;
    LeadEmail:string;
    LeadStatus:string;
    ResourceId:number;
    ResourceName:string;
    IsAvailable:string;
    ResourceCost:number;
    ResourceDescription:string;
    ResourceEnquiryId:number;
    Query:string;
    EnquiryDate:Date=new Date();
}
