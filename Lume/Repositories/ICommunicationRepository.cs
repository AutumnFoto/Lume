using Lume.Models;
using System.Collections.Generic;

namespace Lume.Repositories
{
    public interface ICommunicationRepository
    {
        List<Communication> GetAllCommunication();
        List<Communication> GetByUserId(int id);

        userProfile GetByFirebaseUserId(string firebaseUserId);
        void Add(Communication communication);

        //UpdateCommunication(Communication communication);
        public void DeleteCom(int id);
       
    }

}