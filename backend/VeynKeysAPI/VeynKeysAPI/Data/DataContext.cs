using Microsoft.EntityFrameworkCore;
using VeynKeysAPI.Models;

namespace VeynKeysAPI.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }


        public DbSet<Category>? Category { get; set; }
        public DbSet<Product>? Product { get; set; }
        public DbSet<User>? User { get; set; }

        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }

        public DbSet<Order>? Order { get; set; }
        public DbSet<OrderProduct>? OrderProduct { get; set; }

    }
}
