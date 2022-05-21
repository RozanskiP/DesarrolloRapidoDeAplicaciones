using server.Models;
using server.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Services
{
    public class StudentObserveService
    {
        private readonly StoreContext storeContext;

        public StudentObserveService(StoreContext storeContext)
        {
            this.storeContext = storeContext;
        }

        public IEnumerable<StudentObserve> GetUserStudentObserve(int id)
        {
            var result = storeContext.StudentObserve.Where(go => go.userId == id);

            return result;
        }

        public StudentObserve InsertStudentObserve(StudentObserve studentObserve)
        {
            try
            {

                var isObserve = storeContext.StudentObserve.Where(elem =>
                    elem.studentId == studentObserve.studentId &&
                    elem.userId == studentObserve.userId).Any();

                if(!isObserve)
                {
                    storeContext.StudentObserve.Add(studentObserve);
                    storeContext.SaveChanges();
                    return studentObserve;
                }
                return null;

            }
            catch
            {
                return null;
            }
        }

        public bool DeleteStudentObserve(int id)
        {
            try
            {
                var studentObserve = storeContext.StudentObserve.Where(so => so.id == id).FirstOrDefault();

                if (studentObserve != null)
                {
                    storeContext.StudentObserve.Remove(studentObserve);
                    storeContext.SaveChanges();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }
        }
    }
}
