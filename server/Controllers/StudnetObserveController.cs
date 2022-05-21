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
    public class StudnetObserveController : ControllerBase
    {
        private readonly StudentObserveService studentObserveService;

        public StudnetObserveController(StoreContext storeContext)
        {
            this.studentObserveService = new StudentObserveService(storeContext);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetAllGroup([FromRoute] int id)
        {
            var result = studentObserveService.GetUserStudentObserve(id);

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Insert([FromBody] StudentObserve studentObserve)
        {
            var result = studentObserveService.InsertStudentObserve(studentObserve);

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
            var result = studentObserveService.DeleteStudentObserve(id);

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
