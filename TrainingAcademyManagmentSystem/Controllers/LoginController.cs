using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;
using TrainingAcademyManagmentSystem.Repository;

namespace TrainingAcademyManagmentSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;
        IUserRepo UserRepository;



        public LoginController(IConfiguration config, IUserRepo _IUserRepo)
        {
            _config = config;
            UserRepository = _IUserRepo;
        }



        [AllowAnonymous]
        [HttpGet("{userName}/{password}")]
        //loginmethod--IActionResult
        public IActionResult Login(string userName, string password)
        {
            IActionResult response = Unauthorized();

            Users dbUser = null;

            //Authenticate the user by passing username and password
            dbUser = AuthenticateUser(userName, password);



            if (dbUser != null)
            {
                var tokenString = GenerateJSONWebToken(dbUser);
                response = Ok(new
                {
                    token = tokenString,
                    UserId = dbUser.UserId,
                    UserName = dbUser.UserName,
                    Userpassword = dbUser.Password,
                    RoleId = dbUser.RoleId,
                    IsActive=dbUser.IsActive
                });
            }
            return response;
        }


        //GenerateJsonWebToken()
        private string GenerateJSONWebToken(Users user)
        {
            //security key
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));



            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);



            //generate token
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
            _config["Jwt:Issuer"], null, expires: DateTime.Now.AddMinutes(20), signingCredentials: credentials);



            return new JwtSecurityTokenHandler().WriteToken(token);
        }





        //AuthenticateUSer()
        private Users AuthenticateUser(string userName, string password)
        {

            //validate the user credentials
            //Retrieve data from the database


            Users dbuser = UserRepository.validateUser(userName, password);//checking validity of user by username and password

            if (dbuser != null)
            {

                return dbuser;

            }
            return null;
        }





        // get user details with username and password
        #region userdetails details 
        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet]
        [Route("getuser/{userName}/{password}")]
        public async Task<IActionResult> getUser(string userName, string password)
        {
            try
            {
                var dbuser = UserRepository.validateUser(userName, password);
                if (dbuser == null)
                {
                    return NotFound();
                }
                return Ok(dbuser);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion


        #region user details by id
        [HttpGet]
        [Route("GetUserById")]
        public async Task<IActionResult> GetUsereById(int id)
        {
            try
            {
                var user = await UserRepository.GetuserById(id);
                if (user == null)
                {
                    return NotFound();
                }
                return Ok(user);
            }
            catch (Exception)
            {
                return BadRequest();
            }

        }
        #endregion





        #region Delete User 
        [HttpDelete]
        [Route("DeleteUser")]
        public async Task<IActionResult> DeleteUSer(int id)
        {
            try
            {
                var exp = await UserRepository.DeleteUser(id);
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

        #region Update user details
        [HttpPut]
        // [Authorize]
        [Route("UpdateUser")]
        public async Task<IActionResult> UpdateUser(Users user)
        {
            //Check the validation of body
            if (ModelState.IsValid)
            {
                try
                {
                    await UserRepository.UpdateUser(user);
                    return Ok(user);
                }
                catch (Exception)
                {
                    return BadRequest();
                }
            }
            return BadRequest();
        }
        #endregion




    }

}