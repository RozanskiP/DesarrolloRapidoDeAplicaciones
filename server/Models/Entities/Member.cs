using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models.Entities
{
    public class Member
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string StudentName { get; set; }

        [Required]
        public string Email { get; set; }

        public string WhatStudentTo { get; set; }

        public int GroupId { get; set; }
    }
}
