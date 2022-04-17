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
    public class MemberController : ControllerBase
    {
        private readonly MemberService memberService;

        public MemberController(StoreContext storeContext)
        {
            this.memberService = new MemberService(storeContext);
        }

        [HttpGet]
        public IActionResult GetAllStudent()
        {
            var result = memberService.GetAll();

            return Ok(result);
        }
    }
}
