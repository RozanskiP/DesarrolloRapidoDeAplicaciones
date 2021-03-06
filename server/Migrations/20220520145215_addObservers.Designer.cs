// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using server.Models;

namespace server.Migrations
{
    [DbContext(typeof(StoreContext))]
    [Migration("20220520145215_addObservers")]
    partial class addObservers
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityByDefaultColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("server.Models.Entities.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Subject")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Groups");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "We are 3 people who are looking for a group",
                            Name = "Group RAP, number 2",
                            Subject = "RAP"
                        },
                        new
                        {
                            Id = 2,
                            Description = "We are group od 3 people, and we are looking for fronted member",
                            Name = "Group RAP, number 6",
                            Subject = "RAP"
                        },
                        new
                        {
                            Id = 3,
                            Description = "",
                            Name = "Group PIW, number 3",
                            Subject = "PIW"
                        });
                });

            modelBuilder.Entity("server.Models.Entities.GroupObserve", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("groupId")
                        .HasColumnType("integer");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.ToTable("GroupObserve");
                });

            modelBuilder.Entity("server.Models.Entities.Member", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("GroupId")
                        .HasColumnType("integer");

                    b.Property<string>("StudentName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("WhatStudentTo")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("Members");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "pawel123@wp.pl",
                            GroupId = 1,
                            StudentName = "Pawel",
                            WhatStudentTo = "FrontEnd"
                        },
                        new
                        {
                            Id = 2,
                            Email = "rafal123@wp.pl",
                            GroupId = 1,
                            StudentName = "Rafal",
                            WhatStudentTo = "Devops"
                        },
                        new
                        {
                            Id = 3,
                            Email = "bartek444@wp.pl",
                            GroupId = 1,
                            StudentName = "Bartek",
                            WhatStudentTo = "BackEnd"
                        },
                        new
                        {
                            Id = 4,
                            Email = "pawel123@wp.pl",
                            GroupId = 2,
                            StudentName = "Pawel",
                            WhatStudentTo = "Algorytm"
                        },
                        new
                        {
                            Id = 5,
                            Email = "rafalrafal321@wp.pl",
                            GroupId = 3,
                            StudentName = "Rafal",
                            WhatStudentTo = "Algorytm"
                        },
                        new
                        {
                            Id = 6,
                            Email = "kondrat12@wp.pl",
                            GroupId = 3,
                            StudentName = "Kondrat",
                            WhatStudentTo = "Backend"
                        });
                });

            modelBuilder.Entity("server.Models.Entities.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Image")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Subject")
                        .HasColumnType("text");

                    b.Property<string>("Tags")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Students");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Jestem pawel i jestem backendowcem",
                            Email = "pawir4@wp.pl",
                            Image = "",
                            Name = "Pawel",
                            Subject = "PIW",
                            Tags = "c#, React, JS, django"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Jestem frontem",
                            Email = "rafal@wp.pl",
                            Image = "",
                            Name = "Rafal",
                            Subject = "UCISW",
                            Tags = "tsx, js, react"
                        },
                        new
                        {
                            Id = 3,
                            Description = "fullstack",
                            Email = "agata@wp.pl",
                            Image = "",
                            Name = "Agata",
                            Subject = "Rapido",
                            Tags = "dotnet, angular"
                        });
                });

            modelBuilder.Entity("server.Models.Entities.StudentObserve", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<int>("studentId")
                        .HasColumnType("integer");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.ToTable("StudentObserve");
                });

            modelBuilder.Entity("server.Models.Entities.User", b =>
                {
                    b.Property<int>("uuid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .UseIdentityByDefaultColumn();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Login")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("uuid");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            uuid = 1,
                            Email = "pawir4@wp.pl",
                            Login = "paweir",
                            Password = "xd"
                        },
                        new
                        {
                            uuid = 2,
                            Email = "rafal4@wp.pl",
                            Login = "paweir",
                            Password = "xd"
                        });
                });

            modelBuilder.Entity("server.Models.Entities.Member", b =>
                {
                    b.HasOne("server.Models.Entities.Group", null)
                        .WithMany("Member")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("server.Models.Entities.Group", b =>
                {
                    b.Navigation("Member");
                });
#pragma warning restore 612, 618
        }
    }
}
