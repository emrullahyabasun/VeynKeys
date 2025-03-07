﻿using System.ComponentModel.DataAnnotations.Schema;

namespace VeynKeysAPI.Models
{
    public class OrderProduct
    {
        public int Id { get; set; }
        [ForeignKey("OrderId")]
        public int OrderId { get; set; }
        public Order? Order { get; set; }
        [ForeignKey("ProductId")]
        public int ProductId { get; set; }
        public Product? Product { get; set; }
        public int Quantity { get; set; }
    }
}
