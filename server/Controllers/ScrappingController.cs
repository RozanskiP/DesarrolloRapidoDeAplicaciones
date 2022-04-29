using Microsoft.AspNetCore.Mvc;
using server.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class ScrappingController : ControllerBase
    {
        private readonly ScrappingService scrappingService;

        public ScrappingController()
        {
            this.scrappingService = new ScrappingService();
        }

        [HttpGet]
        public IActionResult GetScrap()
        {
            var result = scrappingService.scrapIt();

            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return Conflict("Something went wrong");
            }
        }
    }
}
