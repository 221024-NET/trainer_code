namespace mvcapp.Models.Repositories
{
    public interface ICustomerRepository
    {
        IList<Customer> Get();
        Customer Get(int id);
    }
}
