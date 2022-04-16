using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace server.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Groups",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Subject = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Groups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Tags = table.Column<string>(type: "text", nullable: true),
                    Image = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    uuid = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Login = table.Column<string>(type: "text", nullable: false),
                    Password = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.uuid);
                });

            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    StudentName = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    WhatStudentTo = table.Column<string>(type: "text", nullable: true),
                    GroupId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Members_Groups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "Groups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Groups",
                columns: new[] { "Id", "Description", "Name", "Subject" },
                values: new object[,]
                {
                    { 1, "We are 3 people who are looking for a group", "Group RAP, number 2", "RAP" },
                    { 2, "We are group od 3 people, and we are looking for fronted member", "Group RAP, number 6", "RAP" },
                    { 3, "", "Group PIW, number 3", "PIW" }
                });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "Description", "Email", "Image", "Name", "Tags" },
                values: new object[,]
                {
                    { 1, "Jestem pawel i jestem backendowcem", "pawir4@wp.pl", "", "Pawel", "c#, React, JS" },
                    { 2, "Jestem frontem", "rafal@wp.pl", "", "Rafal", "tsx, js, react" },
                    { 3, "fullstack", "agata@wp.pl", "", "Agata", "dotnet, angular" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "uuid", "Email", "Login", "Password" },
                values: new object[,]
                {
                    { 1, "pawir4@wp.pl", "paweir", "xd" },
                    { 2, "rafal4@wp.pl", "paweir", "xd" }
                });

            migrationBuilder.InsertData(
                table: "Members",
                columns: new[] { "Id", "Email", "GroupId", "StudentName", "WhatStudentTo" },
                values: new object[,]
                {
                    { 1, "pawel123@wp.pl", 1, "Pawel", "FrontEnd" },
                    { 2, "rafal123@wp.pl", 1, "Rafal", "Devops" },
                    { 3, "bartek444@wp.pl", 1, "Bartek", "BackEnd" },
                    { 4, "pawel123@wp.pl", 2, "Pawel", "Algorytm" },
                    { 5, "rafalrafal321@wp.pl", 3, "Rafal", "Algorytm" },
                    { 6, "kondrat12@wp.pl", 3, "Kondrat", "Backend" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Members_GroupId",
                table: "Members",
                column: "GroupId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Members");

            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Groups");
        }
    }
}
