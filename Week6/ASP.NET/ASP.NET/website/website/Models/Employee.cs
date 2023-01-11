using Microsoft.AspNetCore.SignalR.Protocol;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace website.Models
{
    //[Table("Emp")]
    public class Employee
    {
        //[Column("employee_identifier")]
        //[Key]
        public long EmployeeId { get; set; }

        //[Column(TypeName = "NVARCHAR(MAX)")]
        [Required]
        //[StringLength(50)]
        public string Firstname { get; set; }

        //[StringLength(50, ErrorMessage = "Lastname must be less than 50 characters")]
        //[StringLength(50, ErrorMessage = "Lastname must be less than 50 characters", MinimumLength = 5)]
        public string Lastname { get; set; }
        public DateTime DateOfBirth { get; set; }
        //[Phone]
        public string PhoneNumber { get; set; }
        //[MaxLength(5)]
        //[EmailAddress]
        public string Email { get; set; }
        public string Gender { get; set; }

        //[Url]
        public string WebSite{ get; set; }

        //[NotMapped]
        //public string Dummy { get; set; }

        //[Column(TypeName = "decimal(5,2)")]
        //public decimal Rating { get; set; }

        //[Range(1,199)]
        //public decimal Price { get; set; }
    }
}
