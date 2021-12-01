using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using TrainingAcademyManagmentSystem.ViewModel;

namespace TrainingAcademyManagmentSystem.Repository
{

    //interface for resource enquiry
    public interface IResourceEnquiry
    {
        //CRUD 
        //get resource enquiry
        public Task<List<ResourceEnquiry>> GetResourceEnquiry();

        //get resource enquiry by id
        public Task<ResourceEnquiry> GetResourceEnquiryById(int id);

        //add resource enquiry
        public Task<int> AddResourceEnquiry(ResourceEnquiry enquiry);

        //delete resource enquiry
        public Task<int> DeleteResourceEnquiry(int id);

        //update resource enquiry
        public Task<ResourceEnquiry> UpdateResourceEnquiry(ResourceEnquiry enquiry);

        //get all resource enquiry details
        public  Task<List<ResourceEnquiryModel>> GetResourceEnquiryReport();

        //get all resource enquiry details by id 
        public Task<List<ResourceEnquiryModel>> GetresourceEnquiryReportById(int id);






    }
}
