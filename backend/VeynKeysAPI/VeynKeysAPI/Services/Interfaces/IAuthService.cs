using VeynKeysAPI.Models;

namespace VeynKeysAPI.Services.Interfaces
{
    public interface IAuthService
    {
        public Task<UserLoginResponse> LoginUserAsync(UserLoginRequest request);
    }
}
