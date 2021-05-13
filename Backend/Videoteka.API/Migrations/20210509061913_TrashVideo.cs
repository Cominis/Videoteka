using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Videoteka.API.Migrations
{
    public partial class TrashVideo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsTrashed",
                table: "Videos",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "TrashedDateTime",
                table: "Videos",
                type: "datetime2",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsTrashed",
                table: "Videos");

            migrationBuilder.DropColumn(
                name: "TrashedDateTime",
                table: "Videos");
        }
    }
}
