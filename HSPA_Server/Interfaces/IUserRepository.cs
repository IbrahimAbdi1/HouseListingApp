using System.Threading.Tasks;
using HSPA_Server.Models;

namespace HSPA_Server.Interfaces
{
    public interface IUserRepository
    {
         Task<User> Authenticate(string userName, string password);   
         void Register(string userName, string password); 

         Task<bool> UserAlreadyExists(string userName);
    }
}