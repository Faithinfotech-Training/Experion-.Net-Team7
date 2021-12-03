﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using TrainingAcademyManagmentSystem.ViewModel;

namespace TrainingAcademyManagmentSystem.Repository
{
    public interface ICourseEnquiryRepo
    {
        //CRUD 
        //get Course enquiry
        public Task<List<CourseEnquiry>> GetCourseEnquiry();

        //get Course enquiry by id
        public Task<CourseEnquiry> GetCourseEnquiryById(int id);

        //add Course enquiry
        public Task<int> AddCourseEnquiry(CourseEnquiry enquiry);

        //delete Course enquiry
        public Task<int> DeleteCourseEnquiry(int id);

        //update Course enquiry
        public Task<CourseEnquiry> UpdateCourseEnquiry(CourseEnquiry enquiry);

        //get course enquiry details
        public Task<List<CourseEquiryModel>> GetCourseEnquiryReport();

        //get course enquiry details by course enquiry id
        public Task<List<CourseEquiryModel>> GetCourseEnquiryReportById(int id);

        //get details by course id
        public Task<List<CourseEquiryModel>> GetSummaryByCourseId(int id);


        //get course count details 
        public Task<List<CourseCountModel>> GetCourseCount();



    }
}