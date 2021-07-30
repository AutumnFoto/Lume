using Lume.Models;
using System.Collections.Generic;

namespace Lume.Repositories
{
    public interface ICommunicationRepository
    {
        List<Communication> GetAllCommunication();
        //List<Communication> GetCurrentUserCommunication(string firebaseId);
        //UserProfile GetByFirebaseUserId(string firebaseUserId);
        void Add(Communication communication);

        public void DeleteCom(int id);
    }

}