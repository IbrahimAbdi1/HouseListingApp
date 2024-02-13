using System.ComponentModel.DataAnnotations;

namespace HSPA_Server.Models
{
    public class PropertyType : BaseEntity
    {
        
        [Required]
        public string Name { get; set; }
    }
}