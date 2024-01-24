using Microsoft.EntityFrameworkCore;
using VeynKeysAPI.Models;

namespace VeynKeysAPI.Data
{
    public class DataContext:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"data source=DESKTOP-ABKBG8G;initial catalog=VeynKeysApiDb;integrated security=true");
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
