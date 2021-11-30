﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public class CourseRepo : ICourseRepo
    {
        TrainingManagmentSystemContext db;
        public CourseRepo(TrainingManagmentSystemContext _db)
        {
            db = _db;
        }

        //single course
        public async Task<Courses> GetCourse(int id)
        {
            if(db != null)
            {
                return await db.Courses.FirstOrDefaultAsync(em => em.CourseId == id);
            }
            return null;
        }

        //all courses
        public async Task<List<Courses>> GetCourses()
        {
            if (db != null)
            {
                return await db.Courses.ToListAsync();
            }
            return null;
        }

        //add course
        public async Task<Courses> AddCourse(Courses course)
        {
            if (db != null)
            {
                await db.Courses.AddAsync(course);
                await db.SaveChangesAsync();
                return course;
            }
            return null;
        }

        //update course
        public async Task<Courses> UpdateCourse(Courses course)
        {
            if(db != null)
            {
                db.Courses.Update(course);
                await db.SaveChangesAsync();
                return course;
            }
            return null;
        }

        //delete course
        public async Task<Courses> DeleteCourse(int id)
        {
            if (db != null)
            {
                Courses course = await db.Courses.FirstOrDefaultAsync(em => em.CourseId == id);
                course.IsAvailable = false;
                db.Courses.Update(course);
                await db.SaveChangesAsync();
                return course;
            }
            return null;
        }
    }
}