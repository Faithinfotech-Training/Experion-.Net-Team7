using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public interface ICourseRepo
    {
        //get all courses
        Task<List<Courses>> GetCourses();

        //get single course by id
        Task<Courses> GetCourse(int id);

        //add new course
        Task<Courses> AddCourse(Courses course);

        //update course
        Task<Courses> UpdateCourse(Courses course);

        //delete course
        Task<Courses> DeleteCourse(int id);
    }
}
