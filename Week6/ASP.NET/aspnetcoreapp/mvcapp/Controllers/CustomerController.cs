using Microsoft.AspNetCore.Mvc;
using mvcapp.Models.Repositories;

namespace mvcapp.Controllers
{
    public class CustomerController : Controller
    {
        private ICustomerRepository _customerRepo;
        public CustomerController(ICustomerRepository repo)
        {
            this._customerRepo = repo;
        }

        public IActionResult Index()
        {
            ViewData["message"] = _customerRepo.Get();
            return View();
        }

        public IActionResult ShowDetails(int id)
        {
            //ViewData["message"] = _customerRepo.Get(id);
            //ViewData["id"] = id;
            //ViewData["firstname"] = "John";
            //ViewData["lastname"] = "Smith";
            var customer = _customerRepo.Get(id);
            //ViewData["id"] = customer.Id;
            //ViewData["firstname"] = customer.Firstname;
            //ViewData["lastname"] = customer.Lastname;

            return View(customer);
        }

        public IActionResult ShowAll()
        {
            var customers = _customerRepo.Get();
            return View(customers);
        }

        public IActionResult Details(int id)
        {
            var customer = _customerRepo.Get(id);

            return View(customer);
        }
    }
}
