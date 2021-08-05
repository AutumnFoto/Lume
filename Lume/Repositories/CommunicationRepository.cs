using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Lume.Utils;
using Lume.Models;
using Microsoft.AspNet.SignalR.Infrastructure;

//repository is the database interface to the actual server.
//namespace- makes it so all the code can talk to eachother, groups code for organizational purposes

namespace Lume.Repositories
{
    public class CommunicationRepository : BaseRepository, ICommunicationRepository
    {
        public CommunicationRepository(IConfiguration configuration) : base(configuration) { }

        //list of communications 
        //List<Communication> is the kind of data that returns from the GetAllCommunication method 
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

                    var reader = cmd.ExecuteReader(); // reads and sends sql query to the server and waits for response 

                    var communications = new List<Communication>(); // variable to hold the new list data 
                    while (reader.Read()) //tries to read a record, and if successful keeps going until all records are read
                    {

                        communications.Add(new Communication() // going to add new communication properties 
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Content = DbUtils.GetString(reader, "Content"),
                            Image = DbUtils.GetString(reader, "Image"),
                        });
                    }

                    reader.Close();

                    return communications; // then give back those new communications 
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

     

        public userProfile GetByFirebaseUserId(string firebaseUserId)
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

                    userProfile userProfile = null;

                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                        userProfile = new userProfile()
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
        public Communication GetCommunicationByID(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                SELECT
                                    c.Id,
                                    c.[Image],
                                    c.content,
                                    c.UserProfileId
                                FROM CommunicationCards c
                                where c.Id = @Id";
                    
                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    var communciation = new Communication();

                    while (reader.Read())
                    {
                        communciation.Id = DbUtils.GetInt(reader, "id");
                        communciation.Image = DbUtils.GetString(reader, "Image");
                        communciation.Content = DbUtils.GetString(reader, "Content");
                        communciation.UserProfileId = DbUtils.GetInt(reader, "UserProfileId");

                    }

                    reader.Close();

                    return communciation;
                }
            }
        }
        public List<Communication> GetCommunicationByUserId(int userProfileId)
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
                                      c.Id,
                                      c.UserProfileId
                                    FROM CommunicationCards c
                                   WHERE c.UserProfileId = @UserProfileId";

                    DbUtils.AddParameter(cmd, "@UserProfileId", userProfileId);

                    var reader = cmd.ExecuteReader();

                    var communications = new List<Communication>();

                    while (reader.Read())
                    {

                        communications.Add(new Communication()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Image = DbUtils.GetString(reader, "Image"),
                            Content = DbUtils.GetString(reader, "Content"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        });
                    }

                    reader.Close();

                    return communications;
                }
            }
        }

        public void UpdateCommunication(Communication communication)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE CommunicationCards 
                             SET
                             [Image] = @image,
                             Content= @content
                             WHERE Id =@id";

                    DbUtils.AddParameter(cmd, "@Image", communication.Image);
                    DbUtils.AddParameter(cmd,"@content",communication.Content);
                    DbUtils.AddParameter(cmd,"@Id",communication.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}