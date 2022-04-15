using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Models.Entities;

namespace server.Models
{
    public class StoreContext : DbContext
    {
        private string _connectionString = "Server=PAWEŁ-KOMPUTER; Database = project_individual; Trusted_Connection=True;";

        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Group> Group { get; set; }

        public DbSet<Member> Member { get; set; }

        public DbSet<Student> Student { get; set; }
    }
}
