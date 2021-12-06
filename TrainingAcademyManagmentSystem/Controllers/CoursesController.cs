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
    public class CoursesController : ControllerBase
    {
        private readonly TrainingManagmentSystemContext _context;
        ICourseRepo courseRepo;
        public CoursesController( TrainingManagmentSystemContext context, ICourseRepo _c)
        {
            courseRepo = _c;
            this._context = context;
        }

        //get all courses
        #region get courses
        [HttpGet]
        public async Task<IActionResult> GetCourses()
        {
            var courses = await courseRepo.GetCourses();
            Console.WriteLine(courses);
            if (courses == null)
            {
                return NotFound();
            }
            return Ok(courses);
        }

        #endregion
        //get all courses which are public and available
        #region get all courses which are public and available
        [HttpGet]
        [Route("getavailable")]
        public async Task<IActionResult> GetCoursesAvailable()
        {
            var courses = await courseRepo.GetCoursesAvailable();
            Console.WriteLine(courses);
            if (courses == null)
            {
                return NotFound();
            }
            return Ok(courses);
        }

        #endregion

        //get course by id
        #region single course
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCourse(int id)
        {
                var course = await courseRepo.GetCourse(id);
                if (course == null)
                {
                    return NotFound();
                }
                return Ok(course);
        }
        #endregion

        //add course
        #region add 
        [HttpPost]
        public async Task<IActionResult> AddCourse([FromBody]Courses course)
        {
            try
            {
                Courses added = await courseRepo.AddCourse(course);
                if (added.CourseId>0)
                {
                    return Ok(added);
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

        //update 
        #region update
        [HttpPut]
        public async Task<IActionResult> UpdateCourse([FromBody] Courses course)
        {
            try
            {
                Courses added = await courseRepo.UpdateCourse(course);
                if (added.CourseId > 0)
                {
                    return Ok(added);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                Console.WriteLine("here");
                return BadRequest();
            }
        }

        #endregion

        //delete
        #region delete
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCourse(int id)
        {
            try
            {
                Courses course = await courseRepo.DeleteCourse(id);
                if(course.IsAvailable == false)
                {
                    return Ok(course);
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
    }
}
