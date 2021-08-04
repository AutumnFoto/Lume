using Lume.Models;

namespace Lume.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(userProfile userProfile);
        userProfile GetByFirebaseUserId(string firebaseId);
        
    }
}