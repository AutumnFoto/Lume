using Lume.Models;
using System.Collections.Generic;

namespace Lume.Repositories //interface is a contract with repository, if 
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

//void - doesnt have return type 
//public void makes it public, meaning anything outside of the class can refrence it  instead of private