using VeynKeysAPI.Models;
using VeynKeysAPI.Services.Interfaces;
using VeynKeysAPI.Services.Models;


namespace VeynKeysAPI.Services
{
    public class AuthService : IAuthService
    {
        readonly ITokenService tokenService;

        public AuthService(ITokenService tokenService)
        {
            this.tokenService = tokenService;
        }

        public async Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request)
        {
            UserLoginResponse response = new();

            if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            {
                throw new ArgumentNullException(nameof(request));
            }

            if (request.Username == "onur" && request.Password == "123456")
            {
                var generatedTokenInformation = await tokenService.GenerateToken(new GenerateTokenRequest { Username = request.Username });

                response.AuthenticateResult = true;
                response.AuthToken = generatedTokenInformation.Token;
                response.AccessTokenExpireDate = generatedTokenInformation.TokenExpireDate;
            }

            return response;
        }
    }

}
