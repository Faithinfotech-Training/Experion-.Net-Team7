using System;
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

        public Task<List<CourseEquiryModel>> GetCourseEnquiryReport();



    }
}
