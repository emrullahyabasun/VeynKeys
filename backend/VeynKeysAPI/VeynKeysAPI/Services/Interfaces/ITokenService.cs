using VeynKeysAPI.Services.Models;

namespace VeynKeysAPI.Services.Interfaces
{
    public interface ITokenService
    {
        public Task<GenerateTokenResponse> GenerateToken(GenerateTokenRequest request);
    }
}
