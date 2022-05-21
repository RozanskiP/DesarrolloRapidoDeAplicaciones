using server.Models;
using server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class GroupObserveService
    {
        private readonly StoreContext storeContext;

        public GroupObserveService(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public IEnumerable<GroupObserve> GetUserGroupObserve(int id)
        {
            var result = storeContext.GroupObserve.Where(go => go.userId == id);

            return result;
        }

        public GroupObserve InsertGroupObserve(GroupObserve groupObserve)
        {
            try
            {
                var isObserve = storeContext.GroupObserve.Where(elem =>
                    elem.groupId == groupObserve.groupId &&
                    elem.userId == groupObserve.userId).Any();

                if (!isObserve)
                {
                    storeContext.GroupObserve.Add(groupObserve);
                    storeContext.SaveChanges();
                    return groupObserve;
                }
                return null;
            }
            catch
            {
                return null;
            }
        }

        public bool DeleteGroupObserve(int id)
        {
            try
            {
                var groupObserve = storeContext.GroupObserve.Where(go => go.id == id).FirstOrDefault();

                if (groupObserve != null)
                {
                    storeContext.GroupObserve.Remove(groupObserve);
                    storeContext.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }
        }
    }
}
