using server.Models;
using server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class GroupService
    {
        private readonly StoreContext storeContext;

        public GroupService(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public IEnumerable<Group> GetAll()
        {
            var groups = storeContext.Groups.Select(x => x);

            return groups;
        }

        public Group Get(int id)
        {
            var group = storeContext.Groups.Where(x => x.Id == id).FirstOrDefault();

            return group;
        }

        public Group Post(Group group)
        {
            try
            {
                storeContext.Groups.Add(group);
                storeContext.SaveChanges();
                return group;
            }
            catch
            {
                return null;
            }
        }


    }
}
