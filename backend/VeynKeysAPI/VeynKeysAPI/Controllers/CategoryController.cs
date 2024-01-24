using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using VeynKeysAPI.Data;
using VeynKeysAPI.Models;

namespace VeynKeysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly DataContext _context;

        public CategoryController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]//Token izni olmadan çalışacak
        public IEnumerable<Category> GetAll()
        {
            return _context.Category.ToList();
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public Category GetById(int id)
        {
           
            return _context.Category.Find(id);
            
        }
    }
}
