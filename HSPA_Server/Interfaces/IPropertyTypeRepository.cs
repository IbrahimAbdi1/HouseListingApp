using System.Collections.Generic;
using System.Threading.Tasks;
using HSPA_Server.Models;

namespace HSPA_Server.Interfaces
{
    public interface IPropertyTypeRepository
    {
        Task<IEnumerable<PropertyType>> GetPropertyTypesAsync();         
    }
}