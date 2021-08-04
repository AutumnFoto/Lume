using Lume.Models;
using System.Collections.Generic;

namespace Lume.Repositories
{
    public interface ISignLangRepository
    {
        List<SignLang> GetAllSigns();
        SignLang GetSignByID(int id);
        List<SignLang> GetSignByUserId(int userProfileId);

        userProfile GetByFirebaseUserId(string firebaseUserId);
        void Add(SignLang sign);

        void UpdateSign(SignLang sign);
        public void DeleteSign(int id);

    }

}