using server.Models;
using server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class MemberService
    {
        private readonly StoreContext storeContext;

        public MemberService(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public IEnumerable<Member> GetAll()
        {
            var members = storeContext.Members.Select(x => x);

            return members;
        }
    }
}
