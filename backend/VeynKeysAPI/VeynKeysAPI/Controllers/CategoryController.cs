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
        DataContext db = new DataContext();
        
        [HttpGet]
        [AllowAnonymous]//Token izni olmadan çalışacak
        public IEnumerable<Category> GetAll()
        {
            return db.Category.ToList();
        }

        [HttpGet("{id}")]
        [Authorize]//token izni gereken metot
        public Category GetById(int id)
        {
            var category = db.Category.FirstOrDefault(x => x.Id == id);
            return category;
        }
    }
}
