using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Videoteka.API.Migrations
{
    public partial class UpdateVideoTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "Videos");

            migrationBuilder.AddColumn<string>(
                name: "ContentType",
                table: "Videos",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateUploaded",
                table: "Videos",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "SizeInBytes",
                table: "Videos",
                type: "bigint",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContentType",
                table: "Videos");

            migrationBuilder.DropColumn(
                name: "DateUploaded",
                table: "Videos");

            migrationBuilder.DropColumn(
                name: "SizeInBytes",
                table: "Videos");

            migrationBuilder.AddColumn<byte[]>(
                name: "Content",
                table: "Videos",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
