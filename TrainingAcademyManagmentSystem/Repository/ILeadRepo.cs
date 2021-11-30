using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public interface ILeadRepo
    {
        //CRUD 
        //get leads
        public Task<List<Lead>> GetLeads();

        //get lead by id
        public Task<Lead> GetLeadById(int id);

        //add lead
        public Task<int> AddLead(Lead lead);

        //delete lead
        public Task<int> DeleteLead(int id);

        //update lead
        public Task<Lead> UpdateLead(Lead lead);
    }
}
