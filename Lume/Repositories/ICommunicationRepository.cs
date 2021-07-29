using Lume.Models;
using System.Collections.Generic;

namespace Lume.Repositories
{
    public interface ICommunicationRepository
    {
        List<Communication> GetAllCommunication();
       
    }
}