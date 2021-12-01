using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using TrainingAcademyManagmentSystem.Repository;

namespace TrainingAcademyManagmentSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PageVisitController : ControllerBase
    {
        TrainingManagmentSystemContext db;
        IPageVisitRepo pageVisitRepo;

        public PageVisitController(TrainingManagmentSystemContext db, IPageVisitRepo _pageVisitRepo)
        {
            this.db = db;
            this.pageVisitRepo = _pageVisitRepo;
        }

        #region get all PageVisit Details
        //get Page Visit Details
        [HttpGet]
        public async Task<IActionResult> GetPageVisit()
        {
            try
            {
                var pageVisit = await pageVisitRepo.GetPageVisit();
                if (pageVisit == null)
                {
                    return NotFound();
                }
                return Ok(pageVisit);
            }
            catch
            {
                return BadRequest();
            }
        }
        #endregion

        //update 
        #region update page visit
        [HttpPut]

        // increase page visit count if exist or add new with 1 count
        public async Task<IActionResult> UpdatePageVisit(string pageName)
        {
            try
            {
                PageVisit pageVisit = await pageVisitRepo.UpdatePageVisit(pageName);
                if (pageVisit!=null)
                {
                    return Ok(pageVisit);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("page visit put api error ");
                return BadRequest("page visit put api error :"+e.Message);
            }
        }

        #endregion

    }
}
