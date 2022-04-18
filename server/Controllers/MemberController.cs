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
    [Route("api/[controller]/[action]")]
    public class MemberController : ControllerBase
    {
        private readonly MemberService memberService;

        public MemberController(StoreContext storeContext)
        {
            this.memberService = new MemberService(storeContext);
        }

        [HttpGet]
        public IActionResult GetAllmember()
        {
            var result = memberService.GetAll();

            return Ok(result);
        }


        [HttpPost]
        public IActionResult AddNewMembers([FromBody] Member[] member)
        {
            var response = memberService.Post(member);

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
