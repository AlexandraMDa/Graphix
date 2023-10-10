using app_licenta_backend.Models;

namespace app_licenta_backend.Services
{
    public interface IAuthService
    {
        Task<bool> RegisterUser(User user);
    }
}