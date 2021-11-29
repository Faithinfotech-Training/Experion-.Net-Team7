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
    public class LeadController : ControllerBase
    {
        TrainingManagmentSystemContext db;
        ILeadRepo leadRepo;

        public LeadController(TrainingManagmentSystemContext db, ILeadRepo leadRepo)
        {
            this.db = db;
            this.leadRepo = leadRepo;
        }

        #region get all lead
        //get leads
        [HttpGet]
        public async Task<IActionResult> GetLeads()
        {
            try
            {
                var leads = await leadRepo.GetLeads();
                if (leads == null)
                {
                    return NotFound();
                }
                return Ok(leads);
            }
            catch
            {
                return BadRequest();
            }
        }
        #endregion

        #region get lead by id 
        //get lead by id 
        [HttpGet("{id}")]
        
        public async Task<IActionResult> GetLeadById(int id)
        {
            try
            {
                var lead = await leadRepo.GetLeadById(id);
                if (lead == null)
                {
                    return NotFound();
                }
                return Ok(lead);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion

        #region Add Lead 
        //add lead
        [HttpPost]
        public async Task<IActionResult> AddLead([FromBody] Lead lead)
        {
            //check validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var leadId = await leadRepo.AddLead(lead);
                    if (leadId > 0)
                    {
                        return Ok(leadId);
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

        #region Update Lead

        //update Resource Enquiry
        [HttpPut]
        public async Task<IActionResult> UpdateLead([FromBody] Lead lead)
        {
            //check the validation of this body
            if (ModelState.IsValid)
            {
                try
                {
                    await leadRepo.UpdateLead(lead);

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

        #region Delete Lead
        //delete lead

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLead(int id)
        {
            try
            {
                var lead = await leadRepo.DeleteLead(id);
                return Ok(lead);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }

        #endregion
    }
}
