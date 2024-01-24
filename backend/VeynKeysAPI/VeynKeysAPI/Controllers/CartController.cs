using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VeynKeysAPI.Data;
using VeynKeysAPI.Models;

namespace VeynKeysAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly DataContext _context;

        public CartController(DataContext context)
        {
            _context = context;
        }


        // GET: Cart/GetCart
        [HttpGet("GetCart/{userId}")]
        public async Task<ActionResult<Cart>> GetCart(int userId)
        {
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .ThenInclude(ci => ci.Product)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart == null)
            {
                return NotFound();
            }

            return cart;
        }



        // POST: Cart/AddToCart
        [Authorize]
        [HttpPost("AddToCart")]
        public async Task<ActionResult> AddToCart(int userId, int productId, int quantity)
        {
           
            var user = await _context.User.FindAsync(userId);
            var product = await _context.Product.FindAsync(productId);
            if (user == null || product == null)
            {
                return NotFound();
            }

            
            var cart = await _context.Carts.Include(c => c.CartItems)
                                           .FirstOrDefaultAsync(c => c.UserId == userId);
            if (cart == null)
            {
                cart = new Cart
                {
                    UserId = userId,
                    CartItems = new List<CartItem>()
                };
                _context.Carts.Add(cart);
            }

            
            var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);
            if (cartItem == null)
            {
                cartItem = new CartItem
                {
                    ProductId = productId,
                    Quantity = quantity,
                    CartId = cart.Id
                };
                cart.CartItems.Add(cartItem);
            }
            else
            {
                cartItem.Quantity += quantity;
            }

            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: Cart/RemoveFromCart
        [Authorize]
        [HttpPost("RemoveFromCart")]
        public async Task<ActionResult> RemoveFromCart(int userId, int productId)
        {
           
            var cartItem = await _context.CartItems
                                         .Where(ci => ci.Cart.UserId == userId && ci.ProductId == productId)
                                         .FirstOrDefaultAsync();
            if (cartItem == null)
            {
                return NotFound();
            }

          
            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();

            return Ok();
        }


        // POST: Cart/UpdateQuantity
        [Authorize]
        [HttpPost("UpdateQuantity")]
        public async Task<ActionResult> UpdateQuantity(int userId, int productId, int quantity)
        {
            // Eğer sıfır ise, BadRequest dön
            if (quantity <= 0)
            {
                return BadRequest("Miktar sıfırdan büyük olmalıdır.");
            }

            
            var cartItem = await _context.CartItems
                                         .Where(ci => ci.Cart.UserId == userId && ci.ProductId == productId)
                                         .FirstOrDefaultAsync();
            if (cartItem == null)
            {
                return NotFound();
            }

           
            cartItem.Quantity = quantity;
            await _context.SaveChangesAsync();

            return Ok();
        }


    }
}
