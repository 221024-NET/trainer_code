using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace website.Models
{
    public class EmpDbContext : DbContext
    {
        public EmpDbContext(DbContextOptions<EmpDbContext> options)
        : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; } = null!;
    }
}
