using LevelUpAssessmentBackend2.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace LevelUpAssessmentBackend2
{
    namespace LevelUpAssessmentBackend
    {
        public class DbGradContext : DbContext
        {
            public DbSet<Graduate> Graduates { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=GradDB;Trusted_Connection=True;");
            }
        }
    }

}
