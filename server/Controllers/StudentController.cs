using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using server.Models;
using server.Models.Entities;
using server.Services;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class StudentController : ControllerBase
    {
        private readonly StudentService studentService;

        public StudentController(StoreContext storeContext)
        {
            this.studentService = new StudentService(storeContext);
        }

        [HttpGet]
        public IActionResult GetAllStudent()
        {
            var result = studentService.GetAll();

            return Ok(result);
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetByIdStudnet([FromRoute]int id)
        {
            var response = studentService.Get(id);

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
        public IActionResult AddNewStudent([FromBody] Student student)
        {
            var response = studentService.Post(student);

            if (response != null)
            {
                return Ok(student);
            }
            else
            {
                return Conflict("Its incorrect data");
            }
        }
    }
}
