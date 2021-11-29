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
    public class ResourceController : ControllerBase
    {
        IResourceRepo resourceRepository;

        public ResourceController(IResourceRepo _r)
        {
            resourceRepository = _r;
        }

        //add a resource
        #region add resource
        [HttpPost]
        [Route("AddResource")]
        public async Task<IActionResult> AddResource([FromBody] Resource resource)
        {
            //check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    var resourceId = await resourceRepository.AddResource(resource);
                    if (resourceId != null)
                    {
                        return Ok(resourceId);
                    }
                    else
                    {
                        return NotFound();
                    }
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion

        //delete a resource
        #region delete resource
        [HttpDelete]
        [Route("DeleteResource")]
        public async Task<IActionResult> DeleteResource(int id)
        {
            try
            {
                Resource resource = await resourceRepository.DeleteResource(id);
                if (resource.IsAvailable == false)
                {
                    return Ok(resource);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                return BadRequest();
            }



        }
        #endregion

        //update a resource
        #region update resource
        [HttpPut]
        // [Authorize]
        [Route("UpdateResource")]
        public async Task<IActionResult> UpdateResource([FromBody] Resource resource)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {   
                    await resourceRepository.UpdateResource(resource);
                    return Ok(resource);
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion

        //get details of resources
        #region get resource details
        [HttpGet]
        [Route("GetResources")]
        public async Task<IActionResult> GetResources()
        {
            try
            {
                var exp = await resourceRepository.GetResources();
                if (exp == null)
                {
                    return NotFound();
                }
                return Ok(exp);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion

        //get a resource by its id
        #region get resource by id
        [HttpGet]
        [Route("GetResourceById")]
        public async Task<IActionResult> GetResourceById(int id)
        {
            try
            {
                var exp = await resourceRepository.GetResourceById(id);
                if (exp == null)
                {
                    return NotFound();
                }
                return Ok(exp);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion

    }
}
