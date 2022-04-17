using server.Models;
using server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class StudentService
    {
        private readonly StoreContext storeContext;

        public StudentService(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public IEnumerable<Student> GetAll()
        {
            var students = storeContext.Students.Select(x => x);

            return students;
        }

        public Student Get(int id)
        {
            var student = storeContext.Students.Where(x => x.Id == id).FirstOrDefault();

            return student;
        }

        public Student Post(Student student)
        {
            try
            {
                storeContext.Students.Add(student);
                storeContext.SaveChanges();
                return student;
            }
            catch
            {
                return null;
            }
        }
    }
}
