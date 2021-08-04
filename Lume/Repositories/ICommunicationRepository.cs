using Lume.Models;
using System.Collections.Generic;

namespace Lume.Repositories
{
    public interface ICommunicationRepository
    {
        List<Communication> GetAllCommunication();
        Communication GetCommunicationByID(int id);
        List<Communication> GetCommunicationByUserId(int userProfileId);

        userProfile GetByFirebaseUserId(string firebaseUserId);
        void Add(Communication communication);

        void UpdateCommunication(Communication communication);
        public void DeleteCom(int id);
       
    }

}