using app_licenta_backend.Models;
using Microsoft.AspNetCore.Identity;

namespace app_licenta_backend.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<IdentityUser> _userManager;

        public AuthService(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }
        public async Task<bool> RegisterUser(User user)
        {
            var identityser = new IdentityUser
            {
                UserName = user.Username,
                Email = user.Email
            };

            var res = await _userManager.CreateAsync(identityser, user.Password);
            return res.Succeeded;
        }
    }
}
