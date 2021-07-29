using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Lume.Utils;
using Lume.Models;

namespace Lume.Repositories
{
    public class CommunicationRepository : BaseRepository, ICommunicationRepository
    {
        public CommunicationRepository(IConfiguration configuration) : base(configuration) { }

        public List<Communication> GetAllCommunication()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         SELECT Id, Content, [Image]
                          FROM CommunicationCards
                         ORDER BY Content";

                    var reader = cmd.ExecuteReader();

                    var communications= new List<Communication>();
                    while (reader.Read())
                    {
                       
                       communications.Add(new Communication()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Content = DbUtils.GetString(reader, "Content"),
                        Image=DbUtils.GetString(reader, "Image"),
                     });
                    }

                    reader.Close();

                    return communications;
                }
            }
        }

    }
}