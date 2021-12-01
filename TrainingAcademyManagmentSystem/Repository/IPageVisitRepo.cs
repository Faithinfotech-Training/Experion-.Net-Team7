using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
   public interface IPageVisitRepo
    {
        //get PageVisit 
        public Task<List<PageVisit>> GetPageVisit();

       

        //update PageVisit enquiry
        public Task<PageVisit> UpdatePageVisit(string PageName);

    }
}
