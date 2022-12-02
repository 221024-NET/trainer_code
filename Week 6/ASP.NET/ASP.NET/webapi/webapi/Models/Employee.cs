namespace webapi.Models
{
    public class Employee
    {
        public long EmployeeId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PhoneNumber{ get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
    }
}
