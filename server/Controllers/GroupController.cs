using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Models.Entities;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class GroupController : ControllerBase
    {
        private readonly GroupService groupService;

        public GroupController(StoreContext storeContext)
        {
            this.groupService = new GroupService(storeContext);
        }

        [HttpGet]
        public IActionResult GetAllGroup()
        {
            var result = groupService.GetAll();

            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetByIdGroup([FromRoute] int id)
        {
            var response = groupService.Get(id);

            if (response != null)
            {
                return Ok(response);
            }
            else
            {
                return Conflict("It's incorrect ID");
            }
        }

        [HttpPost]
        public IActionResult AddNewGroup([FromBody] Group group)
        {
            var response = groupService.Post(group);

            if (response != null)
            {
                return Ok(response);
            }
            else
            {
                return Conflict("Its incorrect data");
            }
        }

    }
}
