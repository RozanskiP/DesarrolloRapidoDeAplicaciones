using server.Models;
using server.Models.Entities;
using server.Models.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class UserService
    {
        private readonly StoreContext storeContext;

        public UserService(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public IEnumerable<User> GetAll()
        {
            var users = storeContext.Users.Select(x => x);

            return users;
        }

        public User Login(LoginDTO loginDto)
        {
            var user = storeContext.Users.Where(elem =>
                elem.Login == loginDto.Login &&
                elem.Password == loginDto.Password).FirstOrDefault();

            if (user != null)
            {
                return user;
            }
            else
            {
                return null;
            }
        }

        public object Post(User newUser)
        {
            try
            {
                storeContext.Users.Add(newUser);
                storeContext.SaveChanges();

                var user = storeContext.Users.Where(elem =>
                    elem.Login == newUser.Login &&
                    elem.Password == newUser.Password).FirstOrDefault();


                var result = new { user.uuid, user.Login, user.Email };
                return result;
            }
            catch
            {
                return null;
            }
        }

    }
}
