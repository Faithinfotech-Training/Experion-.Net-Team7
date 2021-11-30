﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using TrainingAcademyManagmentSystem.ViewModel;

namespace TrainingAcademyManagmentSystem.Repository
{
    public class CourseEnquiryRepo:ICourseEnquiryRepo
    {
        TrainingManagmentSystemContext db;

        public CourseEnquiryRepo(TrainingManagmentSystemContext db)
        {
            this.db = db;
        }

        //add Course enquiry
        public async Task<int> AddCourseEnquiry(CourseEnquiry enquiry)
        {
            if (db != null)
            {
                await db.CourseEnquiry.AddAsync(enquiry);

                await db.SaveChangesAsync();
                return enquiry.CourseEnquiryId;
            }
            return 0;
        }

        //delete Course enquiry
        public async Task<int> DeleteCourseEnquiry(int id)
        {
            var enquiry = await db.CourseEnquiry.FirstOrDefaultAsync(em => em.CourseEnquiryId == id);
            if (enquiry != null)
            {
                db.CourseEnquiry.Remove(enquiry);
                await db.SaveChangesAsync();
            }
            return enquiry.CourseEnquiryId;
        }


        //get Course enquiry
        public async Task<List<CourseEnquiry>> GetCourseEnquiry()
        {
            if (db != null)
            {
                return await db.CourseEnquiry.ToListAsync();
            }
            return null;
        }


        //get Course enquiry by id
        public async Task<CourseEnquiry> GetCourseEnquiryById(int id)
        {
            var enquiry = await db.CourseEnquiry.FirstOrDefaultAsync(em => em.CourseEnquiryId == id);
            if (enquiry != null)
            {
                return enquiry;
            }
            return null;
        }


        //get Course report of all 
        public async Task<List<CourseEquiryModel>> GetCourseEnquiryReport()
        {
            //get details from lead and Course enquiry table using linq
            if (db != null)
            {
                return await (from re in db.CourseEnquiry
                              join l in db.Lead on re.LeadId equals l.LeadId
                              join r in db.Courses on re.CourseId equals r.CourseId
                              select new CourseEquiryModel
                              {
                                  LeadId=l.LeadId,
                                  LeadName = l.LeadName,
                                  LeadContact = l.LeadContact,
                                  LeadEmail = l.LeadEmail,
                                  LeadStatus = l.LeadStatus,
                                  LeadQualification=l.LeadQualification,
                                  CourseId=r.CourseId,
                                  CourseName = r.CourseName,
                                  CoursePrice = r.CoursePrice,
                                  CourseDescription = r.CourseDescription,
                                  IsAvailable = r.IsAvailable,
                                  IsPublic=r.IsPublic,
                                  CourseEnquiryId = re.CourseEnquiryId,
                                  Query = re.Query,
                                  EnquiryDate = re.EnquiryDate

                              }

                              ).ToListAsync();
            }
            return null;
        }

        //update Course enquiry
        public async Task<CourseEnquiry> UpdateCourseEnquiry(CourseEnquiry enquiry)
        {
            if (db != null)
            {
                db.CourseEnquiry.Update(enquiry);
                await db.SaveChangesAsync();

            }
            return null;
        }
    }
}