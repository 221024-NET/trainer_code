namespace mvcapp.Models.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        static private IList<Customer> _customers = new List<Customer>();

        public CustomerRepository()
        {
            if (_customers.Count == 0)
            {
                _customers.Add(new Customer() { Id = 101, Firstname = "John", Lastname = "Smith" });
                _customers.Add(new Customer() { Id = 102, Firstname = "Mary", Lastname = "Jane" });
                _customers.Add(new Customer() { Id = 103, Firstname = "Joe", Lastname = "Query" });
            };
        }

        public IList<Customer> Get()
        {
            return _customers;
        }

        public Customer Get(int id)
        {
            // SELECT * FROM Customers WHERE Id = id.
            var customer = _customers.Where(c => c.Id == id).FirstOrDefault<Customer>();

            return customer;
        }
    }
}
