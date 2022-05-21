using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.Entities
{
    public class GroupObserve
    {
        [Key]
        public int id { get; set; }

        public int userId { get; set; }


        public int groupId { get; set; }
    }
}
