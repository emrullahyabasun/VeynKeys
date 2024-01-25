using Microsoft.EntityFrameworkCore;
using VeynKeysAPI.Data;
using VeynKeysAPI.Models;
using VeynKeysAPI.Services.Interfaces;
using VeynKeysAPI.Services.Models;


namespace VeynKeysAPI.Services
{
    public class AuthService : IAuthService
    {
        readonly ITokenService tokenService;
        readonly DataContext context;

        public AuthService(ITokenService tokenService, DataContext context)
        {
            this.tokenService = tokenService;
            this.context = context;
        }

        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {
            UserLoginResponse response = new();

            
            var user = await context.User
                                    .SingleOrDefaultAsync(u => u.Username == request.Username && u.Password == request.Password);

            if (user == null)
            {
                
                throw new ArgumentException("Username or password is incorrect.");
            }

            // token oluşur
            var generatedTokenInformation = await tokenService.GenerateToken(new GenerateTokenRequest { Username = user.Username });

            response.Username = user.Username;
            response.Password = user.Password;
            response.Email = user.Email; 
            response.UserId = user.Id;
            response.AuthenticateResult = true;
            response.AuthToken = generatedTokenInformation.Token;
            response.AccessTokenExpireDate = generatedTokenInformation.TokenExpireDate;

            return response;
        }
    }

}
