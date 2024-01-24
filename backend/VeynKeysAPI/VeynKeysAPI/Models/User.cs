namespace VeynKeysAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Email { get; set; }

        
        public bool IsStatus { get; set; }=true;

        public List<Order>? Orders { get; set; }
        public Cart? Cart { get; set; }

    }
}
