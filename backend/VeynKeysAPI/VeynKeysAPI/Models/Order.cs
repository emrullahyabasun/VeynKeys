namespace VeynKeysAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? Address1 { get; set; }
        public string? City { get; set; }
        public string? Street { get; set; }
        public string? PostCode { get; set; }
        public string? Phone { get; set; }
        public string? Email { get; set; }
        public DateTime Date { get; set; }
        public bool IsStatus { get; set; } = true;
        public bool IsArrived { get; set; }
        public List<OrderProduct>? OrderDetails { get; set; }
    }
}
