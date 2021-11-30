﻿using Microsoft.AspNetCore.Mvc;
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

        public  Task<List<ResourceEnquiryModel>> GetResourceEnquiryReport();




    }
}