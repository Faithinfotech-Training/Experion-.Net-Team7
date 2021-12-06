using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using TrainingAcademyManagmentSystem.ViewModel;

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

        //get enquiry summary by Enquiry date
        public async Task<List<ResourceCountModel>> GetResourceByDate(DateTime date)
        {
            return await(from re in db.ResourceEnquiry
                         join r in db.Resource on re.ResourceId equals r.ResourceId
                         where re.EnquiryDate>=date
                         group re by new { re.ResourceId, r.ResourceName,re.EnquiryDate } into grp

                         select new ResourceCountModel
                         {
                             ResourceId = (int)grp.Key.ResourceId,
                             ResourceName = grp.Key.ResourceName,
                             EnquiryDate=grp.Key.EnquiryDate,
                             ResourceCount = grp.Count()


                         }
).ToListAsync();
        }

        //get resource count
        public async Task<List<ResourceCountModel>> GetResourceCount()
        {
            return await (from re in db.ResourceEnquiry
                          join r in db.Resource on re.ResourceId equals r.ResourceId
                          group re by new { re.ResourceId, r.ResourceName } into grp

                          select new ResourceCountModel
                          {
                              ResourceId = (int)grp.Key.ResourceId,
                              ResourceName = grp.Key.ResourceName,
                              ResourceCount = grp.Count()


                          }
            ).ToListAsync();
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


        //get resource report of all 
        public async Task<List<ResourceEnquiryModel>> GetResourceEnquiryReport()
        {
            //get details from lead resource and resource enquiry table using linq
            if(db!=null)
            {
                return await (from re in db.ResourceEnquiry
                              join l in db.Lead on re.LeadId equals l.LeadId
                              join r in db.Resource on re.ResourceId equals r.ResourceId
                              select new ResourceEnquiryModel
                              {
                                  ResourceEnquiryId=re.ResourceEnquiryId,
                                  LeadId=l.LeadId,
                                  LeadName=l.LeadName,
                                  LeadContact=l.LeadContact,
                                  ResourceId=r.ResourceId,
                                  LeadEmail=l.LeadEmail,
                                  LeadStatus=l.LeadStatus,
                                  ResourceName=r.ResourceName,
                                  ResourceCost=r.ResourceCost,
                                  ResourceDescription=r.ResourceDescription,
                                  IsAvailable=r.IsAvailable,
                                  Query=re.Query,
                                  EnquiryDate=re.EnquiryDate

                              }
                              
                              ).ToListAsync();
            }
            return null;
        }


        //get resource enquiry details by id
        public async Task<List<ResourceEnquiryModel>> GetresourceEnquiryReportById(int id)
        {
            //get details from lead resource and resource enquiry table using linq
            if (db != null)
            {
                return await (from re in db.ResourceEnquiry
                              join l in db.Lead on re.LeadId equals l.LeadId
                              join r in db.Resource on re.ResourceId equals r.ResourceId
                              where re.ResourceEnquiryId==id
                              select new ResourceEnquiryModel
                              {
                                  ResourceEnquiryId = re.ResourceEnquiryId,
                                  LeadId = l.LeadId,
                                  LeadName = l.LeadName,
                                  LeadContact = l.LeadContact,
                                  LeadEmail = l.LeadEmail,
                                  LeadStatus = l.LeadStatus,
                                  ResourceId = r.ResourceId,
                                  ResourceName = r.ResourceName,
                                  ResourceCost = r.ResourceCost,
                                  ResourceDescription = r.ResourceDescription,
                                  IsAvailable = r.IsAvailable,
                                  Query = re.Query,
                                  EnquiryDate = re.EnquiryDate

                              }

                              ).ToListAsync();
            }
            return null;
        }

        //get details by resource id
        public async Task<List<ResourceEnquiryModel>> GetSummaryByResourceId(int id)
        {
            //get details from lead and resource enquiry table using linq
            if (db != null)
            {
                return await (from re in db.ResourceEnquiry
                              join l in db.Lead on re.LeadId equals l.LeadId
                              join r in db.Resource on re.ResourceId equals r.ResourceId
                              where r.ResourceId == id
                              select new ResourceEnquiryModel
                              {
                                  ResourceEnquiryId = re.ResourceEnquiryId,
                                  LeadId = l.LeadId,
                                  LeadName = l.LeadName,
                                  LeadContact = l.LeadContact,
                                  LeadEmail = l.LeadEmail,
                                  LeadStatus = l.LeadStatus,
                                  ResourceId = r.ResourceId,
                                  ResourceName = r.ResourceName,
                                  ResourceCost = r.ResourceCost,
                                  ResourceDescription = r.ResourceDescription,
                                  IsAvailable = r.IsAvailable,
                                  Query = re.Query,
                                  EnquiryDate = re.EnquiryDate

                              }

              ).ToListAsync();







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
