
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using VeynKeysAPI.Models;
using VeynKeysAPI.Services.Interfaces;


[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    readonly IAuthService authService;

    public AuthController(IAuthService authService)
    {
        this.authService = authService;
    }

    [HttpPost("LoginUser")]
    [AllowAnonymous]
    public async Task<ActionResult<UserLoginResponse>> LoginUserAsync([FromBody] UserLoginRequest request)
    {
        var result = await authService.LoginUserAsync(request);

        return result;
    }

    

}