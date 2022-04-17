using server.Models;
using server.Models.Entities;
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

    }
}
