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
    public class ResourceEnquiryController : ControllerBase
    {
        TrainingManagmentSystemContext db;
        IResourceEnquiry resourceEnquiry;

        public ResourceEnquiryController(TrainingManagmentSystemContext db, IResourceEnquiry resourceEnquiry)
        {
            this.db = db;
            this.resourceEnquiry = resourceEnquiry;
        }

        #region get resource enquiry
        //get resource enquiry
        [HttpGet]
        public async Task<IActionResult> GetResourceEnquiry()
        {
            try
            {
                var enquiry = await resourceEnquiry.GetResourceEnquiry();
                if(enquiry==null)
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

        #region get resource enquiry by id 
        //get resource enquiry by id 
        [HttpGet]
        [Route("GetEnquiry")]
        public async Task<IActionResult> GetResourceEnquiryById(int id)
        {
            try
            {
                var enquiry = await resourceEnquiry.GetResourceEnquiryById(id);
                if(enquiry==null)
                {
                    return NotFound();
                }
                return Ok(enquiry);
            }
            catch(Exception)
            {
                return BadRequest();
            }
        }

        #endregion

        #region Add Resource Enquiry
        //add resource enquiry
        [HttpPost]
        public async Task<IActionResult> AddResourceEnquiry([FromBody] ResourceEnquiry enquiry)
        {
            //check validation of body
            if(ModelState.IsValid)
            {
                try
                {
                    var enquiryId= await resourceEnquiry.AddResourceEnquiry(enquiry);
                    if(enquiryId>0)
                    {
                        return Ok(enquiryId);
                    }
                    return NotFound();
                }
                catch(Exception)
                {
                    return BadRequest();
                }
            }
            return NotFound();
        }



        #endregion

        #region Update Resource Enquiry

        //update Resource Enquiry
        [HttpPut]
        public async Task<IActionResult> UpdateUser([FromBody] ResourceEnquiry enquiry)
        {
            //check the validation of this body
            if (ModelState.IsValid)
            {
                try
                {
                    await resourceEnquiry.UpdateResourceEnquiry(enquiry);

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

        #region Delete Resource Enquiry
        //delete enquiry

        [HttpDelete]
        public async Task<IActionResult> DeleteResourceEnquiry(int id)
        {
            try
            {
                var enquiry = await resourceEnquiry.DeleteResourceEnquiry(id);
                return Ok(enquiry);
            }
            catch(Exception)
            {
                return BadRequest();
            }
        }

        #endregion

        #region Get all enquiry details
        [HttpGet]
        [Route("EnquiryReport")]
        public async Task<IActionResult> GetResourceEnquiryReport()
        {
            try
            {
                var details = await resourceEnquiry.GetResourceEnquiryReport();

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
