using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public class LeadRepo : ILeadRepo
    {
        TrainingManagmentSystemContext db;

        public LeadRepo(TrainingManagmentSystemContext db)
        {
            this.db = db;
        }

        //add lead 
        public async Task<int> AddLead(Lead lead)
        {
            if (db != null)
            {
                await db.Lead.AddAsync(lead);

                await db.SaveChangesAsync();
                return lead.LeadId;
            }
            return 0;
        }

        //delete lead
        public  async Task<int> DeleteLead(int id)
        {
            var lead = await db.Lead.FirstOrDefaultAsync(em => em.LeadId == id);
            if (lead != null)
            {
                db.Lead.Remove(lead);
                await db.SaveChangesAsync();
            }
            return lead.LeadId;
        }

        //get lead by id
        public async Task<Lead> GetLeadById(int id)
        {
            var lead = await db.Lead.FirstOrDefaultAsync(em => em.LeadId == id);
            if (lead != null)
            {
                return lead;
            }
            return null;
        }


        //get all leads
        public async Task<List<Lead>> GetLeads()
        {
            if (db != null)
            {
                return await db.Lead.ToListAsync();
            }
            return null;
        }

        //update lead
        public async Task<Lead> UpdateLead(Lead lead)
        {
            if (db != null)
            {
                db.Lead.Update(lead);
                await db.SaveChangesAsync();

            }
            return null;
        }
    }
}
