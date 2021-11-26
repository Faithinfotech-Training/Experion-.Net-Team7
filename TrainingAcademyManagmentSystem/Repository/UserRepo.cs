using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingAcademyManagmentSystem.Models;

namespace TrainingAcademyManagmentSystem.Repository
{
    public class UserRepo : IUserRepo
    {
        TrainingManagmentSystemContext _db;

        public UserRepo(TrainingManagmentSystemContext db)
        {
            _db = db;
        }


        //get user name and passform as input and check it is exist in user table
        //if it exist return user details else return null
        public  Users validateUser(string username, string password)
        {

            if (_db != null)
            {
                Users dbuser = _db.Users.FirstOrDefault(em => em.UserName == username && em.Password == password);
                if (dbuser != null)
                {
                    return dbuser;
                }
            }
            return null;

        }


        //get user details by pasing id
        public async Task<Users> GetuserById(int id)
        {
            if (_db != null)
            {

                return _db.Users.FirstOrDefault(user=>user.UserId==id);


            }
            return null;

        }

        //update user details
        public async Task<Users> UpdateUser(Users user)
        {
            if (_db != null)
            {
                _db.Users.Update(user);
                await _db.SaveChangesAsync();
                return user;
            }
            return null;
        }

        //delete user by passing id
        public async Task<Users> DeleteUser(int id)
        {

            if (_db != null)
            {
                Users user = _db.Users.Find(id);
                _db.Users.Remove(user);
                _db.SaveChanges();

                return (user);
            }

            return null;


        }





    }
}
