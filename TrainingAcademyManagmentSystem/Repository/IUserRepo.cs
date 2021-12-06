using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
   public interface IUserRepo
    {
        // get user details by using username and password
        public Users validateUser(string username, string password);



        //--- get user by id ---//
        public Task<Users> GetuserById(int id);



        // delete user by id
        Task<Users> DeleteUser(int id);



        //--- update user ---//
        Task<Users> UpdateUser(Users user);

        //add user

        public Task<int> AddUser(Users user);



    }
}
