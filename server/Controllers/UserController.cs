using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Models.Entities;
using server.Models.Models;
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

        [HttpPost]
        public IActionResult Login([FromBody] LoginDTO loginDto)
        {
            var response = userService.Login(loginDto);

            if (response != null)
            {
                var loginResponse = new LoginResponseDTO
                {
                    uuid = response.uuid,
                    Login = response.Login,
                    Email = response.Email,
                };

                return Ok(loginResponse);
            }
            else
            {
                return Conflict("Login or Passward it incorrect");
            }
        }

        [HttpPost]
        public IActionResult AddNewUser([FromBody] User user)
        {
            var response = userService.Post(user);

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
