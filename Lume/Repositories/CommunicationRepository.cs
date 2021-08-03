using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Lume.Utils;
using Lume.Models;
using Microsoft.AspNet.SignalR.Infrastructure;

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

                    var communications = new List<Communication>();
                    while (reader.Read())
                    {

                        communications.Add(new Communication()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Content = DbUtils.GetString(reader, "Content"),
                            Image = DbUtils.GetString(reader, "Image"),
                        });
                    }

                    reader.Close();

                    return communications;
                }
            }
        }

        public void Add(Communication communication)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO CommunicationCards

                        ([Image],Content, UserProfileId)

                        OUTPUT INSERTED.ID

                        VALUES
                       (@Image,@Content, @UserProfileId)";

                    DbUtils.AddParameter(cmd, "@Image", communication.Image);
                    DbUtils.AddParameter(cmd, "@content", communication.Content);
                    DbUtils.AddParameter(cmd, "@UserProfileId", communication.UserProfileId);
                    



                    communication.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


        public void DeleteCom(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM CommunicationCards WHERE Id = @id";

                    DbUtils.AddParameter(cmd,
                                         "@id",
                                         id);
                    cmd.ExecuteNonQuery();

                }
            }
        }

     

        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FirebaseUserId, up.FirstName, up.LastName,
                               up.Email
                          FROM UserProfile up
                         WHERE FirebaseUserId = @FirebaseuserId";

                    DbUtils.AddParameter(cmd, "@FirebaseUserId", firebaseUserId);

                    UserProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            FireBaseUserId = DbUtils.GetString(reader, "FireBaseUserId"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                        };
                    }
                    reader.Close();

                    return userProfile;
                }
            }
        }

        public List<Communication> GetByUserId(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @" 
                                SELECT 
                                      c.[image],
                                      c.content,
                                      c.UserProfileId,
                                    [UserProfile].Id
                                    FROM CommunicationCards c
                                    LEFT JOIN [UserProfile]
                                 ON c.UserProfileId = [UserProfile].id
                                   WHERE c.UserProfileId = @Id";

                    DbUtils.AddParameter(cmd, "@id", id);

                    var reader = cmd.ExecuteReader();

                    var communications = new List<Communication>();

                    while (reader.Read())
                    {

                        communications.Add(new Communication()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Image = DbUtils.GetString(reader, "Image"),
                            Content = DbUtils.GetString(reader, "Content"),
                         
                        }); ;
                    }

                    reader.Close();

                    return communications;
                }
            }
        }

      
    }
}