﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.Entities
{
    public class Group
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int Name { get; set; }

        public string Description { get; set; }

        public string Subject { get; set; }

        public ICollection<Member> Member { get; set; }
    }
}