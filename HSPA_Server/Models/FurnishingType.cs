using System.ComponentModel.DataAnnotations;

namespace HSPA_Server.Models
{
    public class FurnishingType : BaseEntity
    {
        

        [Required]
        public string Name { get; set; }
    }
}