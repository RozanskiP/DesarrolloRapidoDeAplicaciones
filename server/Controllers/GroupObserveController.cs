using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Models.Entities;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroupObserveController : ControllerBase
    {
        private readonly GroupObserveService groupObserveService;

        public GroupObserveController(StoreContext storeContext)
        {
            this.groupObserveService = new GroupObserveService(storeContext);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetAllGroup([FromRoute] int id)
        {
            var result = groupObserveService.GetUserGroupObserve(id);

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Insert([FromBody] GroupObserve groupObserve)
        {
            var result = groupObserveService.InsertGroupObserve(groupObserve);

            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return Conflict("Its incorrect data");
            }
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult Delete([FromRoute] int id)
        {
            var result = groupObserveService.DeleteGroupObserve(id);

            if (result)
            {
                return Ok(result);
            }
            else
            {
                return Conflict("Its incorrect id");
            }
        }
    }
}
