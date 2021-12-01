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
    public class CourseEnquiryController : ControllerBase
    {

        TrainingManagmentSystemContext db;
        ICourseEnquiryRepo courseEnquiry;

        public CourseEnquiryController(TrainingManagmentSystemContext db, ICourseEnquiryRepo _courseEnquiry)
        {
            this.db = db;
            this.courseEnquiry = _courseEnquiry;
        }

        #region get course enquiry
        //get Course enquiry
        [HttpGet]
        public async Task<IActionResult> GetCourseEnquiry()
        {
            try
            {
                var enquiry = await this.courseEnquiry.GetCourseEnquiry();
                if (enquiry == null)
                {
                    return NotFound();
                }
                return Ok(enquiry);
            }
            catch
            {
                return BadRequest();
            }
        }
        #endregion

        #region get Course enquiry by id 
        //get Course enquiry by id 
        [HttpGet]
        [Route("GetEnquiry")]
        public async Task<IActionResult> GetCourseEnquiryById(int id)
        {
            try
            {
                var enquiry = await this.courseEnquiry.GetCourseEnquiryById(id);
                if (enquiry == null)
                {
                    return NotFound();
                }
                return Ok(enquiry);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion

        #region Add Course Enquiry
        //add Course enquiry
        [HttpPost]
        public async Task<IActionResult> AddCourseEnquiry([FromBody] CourseEnquiry enquiry)
        {
            //check validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var enquiryId = await courseEnquiry.AddCourseEnquiry(enquiry);
                    if (enquiryId > 0)
                    {
                        return Ok(enquiryId);
                    }
                    return NotFound();
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return NotFound();
        }



        #endregion

        #region Update Course Enquiry

        //update Course Enquiry
        [HttpPut]
        public async Task<IActionResult> UpdateCourseEnquiry([FromBody] CourseEnquiry enquiry)
        {
            //check the validation of this body
            if (ModelState.IsValid)
            {
                try
                {
                    await this.courseEnquiry.UpdateCourseEnquiry(enquiry);

                    return Ok();

                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }

        #endregion

        #region Delete Course Enquiry
        //delete Courseenquiry

        [HttpDelete]
        public async Task<IActionResult> DeleteCourseEnquiry(int id)
        {
            try
            {
                var enquiry = await this.courseEnquiry.DeleteCourseEnquiry(id);
                return Ok(enquiry);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion

        #region Get all Course details
        [HttpGet]
        [Route("EnquiryReport")]
        public async Task<IActionResult> GetCourseEnquiryReport()
        {
            try
            {
                var details = await this.courseEnquiry.GetCourseEnquiryReport();

                if (details == null)
                {
                    return NotFound();
                }
                return Ok(details);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion

        #region Get all enquiry details by id
        [HttpGet]
        [Route("EnquiryReportById")]
        public async Task<IActionResult> GetCourseEnquiryReportById(int id)
        {
            try
            {
                var details = await courseEnquiry.GetCourseEnquiryReportById(id);

                if (details == null)
                {
                    return NotFound();
                }
                return Ok(details);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion
    }
}
