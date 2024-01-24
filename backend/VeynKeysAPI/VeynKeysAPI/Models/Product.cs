using System.ComponentModel.DataAnnotations.Schema;

namespace VeynKeysAPI.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public int? Price { get; set; }
        public string? Image { get; set; }
        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
       
        public Category? Category { get; set; }



    }
}
