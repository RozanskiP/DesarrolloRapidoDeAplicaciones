using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly UserService userService;

        public UserController(StoreContext storeContext)
        {
            this.userService = new UserService(storeContext);
        }

        [HttpGet]
        public IActionResult GetAllUser()
        {
            var result = userService.GetAll();

            return Ok(result);
        }
    }
}
