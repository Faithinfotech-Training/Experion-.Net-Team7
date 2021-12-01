using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public class PageVisitRepo:IPageVisitRepo
    {
        TrainingManagmentSystemContext db;

        public PageVisitRepo(TrainingManagmentSystemContext db)
        {
            this.db = db;
        }


        // get all  page visit details
       public async Task<List<PageVisit>> GetPageVisit()
        {
            if (db != null)
            {
                return await db.PageVisit.ToListAsync();
            }
            return null;
        }


        // pasing page name and checking if it exist ,if then increasing its couunt
        public async Task<PageVisit> UpdatePageVisit(string PageName)
        {
            if (db != null)
            {
               // PageVisit dbpage = null;
                PageVisit dbpage =  db.PageVisit.FirstOrDefault(em => em.PageName == PageName);
                if(dbpage!=null)
                {
                    dbpage.PageCount = dbpage.PageCount + 1;
                    db.PageVisit.Update(dbpage);
                     db.SaveChanges();
                    return dbpage;
                }
                else
                {
                    PageVisit pagevisit = new PageVisit();
                    pagevisit.PageName = PageName;
                    pagevisit.PageCount = 1;
                   
                     db.PageVisit.AddAsync(pagevisit);
                     db.SaveChangesAsync();
                    return pagevisit;

                }
              
            }
            return null;
        }
    }
}
