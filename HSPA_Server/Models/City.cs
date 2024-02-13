namespace HSPA_Server.Models
{
    public class City : BaseEntity
    {
        
        public string Name { get; set; }

        public string Country {  get; set; } 
        public DateTime LastUpdatedOn {  get; set; }
        public int  LastUpdatedBy { get; set; }
        
    }
}
