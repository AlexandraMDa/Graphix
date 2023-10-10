using app_licenta_backend.Models;
using app_licenta_backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace app_licenta_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<bool> SignUp(User user)
        {
            return await _authService.RegisterUser(user);
        }

        [HttpGet]
        public async Task Login(User user)
        {

        }
    }
}
