using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public class ResourceEnquiryRepo : IResourceEnquiry
    {
        TrainingManagmentSystemContext db;

        public ResourceEnquiryRepo(TrainingManagmentSystemContext db)
        {
            this.db = db;
        }

        public async Task<int> AddResourceEnquiry(ResourceEnquiry enquiry)
        {
            if (db != null)
            {
                await db.ResourceEnquiry.AddAsync(enquiry);

                await db.SaveChangesAsync();
                return enquiry.ResourceEnquiryId;
            }
            return 0;
        }

        //delete resource enquiry
        public async Task<int> DeleteResourceEnquiry(int id)
        {
            var enquiry = await db.ResourceEnquiry.FirstOrDefaultAsync(em => em.ResourceEnquiryId == id);
            if(enquiry!=null)
            {
                db.ResourceEnquiry.Remove(enquiry);
                await db.SaveChangesAsync();
            }
            return enquiry.ResourceEnquiryId;
        }


        //get resource enquiry
        public async Task<List<ResourceEnquiry>> GetResourceEnquiry()
        {
            if(db!=null)
            {
                return await db.ResourceEnquiry.ToListAsync();
            }
            return null;
        }


        //get resource enquiry by id
        public async Task<ResourceEnquiry> GetResourceEnquiryById(int id)
        {
            var enquiry = await db.ResourceEnquiry.FirstOrDefaultAsync(em => em.ResourceEnquiryId == id);
            if (enquiry != null)
            {
                return enquiry;
            }
            return null;
        }

        //update resource enquiry
        public async Task<ResourceEnquiry> UpdateResourceEnquiry(ResourceEnquiry enquiry)
        {
            if(db!=null)
            {
                 db.ResourceEnquiry.Update(enquiry);
                await db.SaveChangesAsync();
                
            }
            return null;
        }
    }
}
