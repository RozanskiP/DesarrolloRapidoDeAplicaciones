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
        private string _connectionString = "Server=localhost,1433; Database=project_individual; User=sa; Password=password;";
        private string _connectionStringDocker = "host=localhost;port=5432;database=postgresdb;username=UserPawel;password=PasswordPawel";
        private string _connectionStringDockerCompose = "host=db;port=5432;database=postgresdb;username=UserPawel;password=PasswordPawel";

        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_connectionStringDocker);
        }

        public DbSet<Group> Groups { get; set; }

        public DbSet<Member> Members { get; set; }

        public DbSet<Student> Students { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Student>().HasData(
                new Student
                {
                    Id = 1,
                    Name = "Pawel",
                    Email = "pawir4@wp.pl",
                    Description = "Jestem pawel i jestem backendowcem",
                    Tags = "c#, React, JS, django",
                    Image = "",
                    Subject = "PIW",
                },
                new Student
                {
                    Id = 2,
                    Name = "Rafal",
                    Email = "rafal@wp.pl",
                    Description = "Jestem frontem",
                    Tags = "tsx, js, react",
                    Image = "",
                    Subject = "UCISW",
                },
                new Student
                {
                    Id = 3,
                    Name = "Agata",
                    Email = "agata@wp.pl",
                    Description = "fullstack",
                    Tags = "dotnet, angular",
                    Image = "",
                    Subject = "Rapido",
                }
            );

            modelBuilder.Entity<Group>().HasData(
                new Group
                {
                    Id = 1,
                    Name = "Group RAP, number 2",
                    Description = "We are 3 people who are looking for a group",
                    Subject = "RAP"
                },
                new Group
                {
                    Id = 2,
                    Name = "Group RAP, number 6",
                    Description = "We are group od 3 people, and we are looking for fronted member",
                    Subject = "RAP"
                },
                new Group
                {
                    Id = 3,
                    Name = "Group PIW, number 3",
                    Description = "",
                    Subject = "PIW"
                }
            );

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    uuid = 1,
                    Email = "pawir4@wp.pl",
                    Login = "paweir",
                    Password = "xd"
                },
                new User
                {
                    uuid = 2,
                    Email = "rafal4@wp.pl",
                    Login = "paweir",
                    Password = "xd"
                }
            );

            modelBuilder.Entity<Member>().HasData(
                new Member
                {
                    Id = 1,
                    StudentName = "Pawel",
                    Email = "pawel123@wp.pl",
                    WhatStudentTo = "FrontEnd",
                    GroupId = 1
                },
                new Member
                {
                    Id = 2,
                    StudentName = "Rafal",
                    Email = "rafal123@wp.pl",
                    WhatStudentTo = "Devops",
                    GroupId = 1
                },
                new Member
                {
                    Id = 3,
                    StudentName = "Bartek",
                    Email = "bartek444@wp.pl",
                    WhatStudentTo = "BackEnd",
                    GroupId = 1
                },
                new Member
                {
                    Id = 4,
                    StudentName = "Pawel",
                    Email = "pawel123@wp.pl",
                    WhatStudentTo = "Algorytm",
                    GroupId = 2
                },
                new Member
                {
                    Id = 5,
                    StudentName = "Rafal",
                    Email = "rafalrafal321@wp.pl",
                    WhatStudentTo = "Algorytm",
                    GroupId = 3
                },
                new Member
                {
                    Id = 6,
                    StudentName = "Kondrat",
                    Email = "kondrat12@wp.pl",
                    WhatStudentTo = "Backend",
                    GroupId = 3
                }
            );
        }
    }
}
