using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using Lume.Utils;
using Lume.Models;
using Microsoft.AspNet.SignalR.Infrastructure;

namespace Lume.Repositories
{
    public class SignLangRepository : BaseRepository, ISignLangRepository
    {
        public SignLangRepository(IConfiguration configuration) : base(configuration) { }

        public List<SignLang> GetAllSigns()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                         SELECT Id,[Name], [Image]
                          FROM SignLanguage
                         ORDER BY [Name]";

                    var reader = cmd.ExecuteReader();

                    var signs = new List<SignLang>();
                    while (reader.Read())
                    {

                        signs.Add(new SignLang()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                            Image = DbUtils.GetString(reader, "Image"),
                        });
                    }

                    reader.Close();

                    return signs;
                }
            }
        }

        public void Add(SignLang sign)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO SignLanguage

                        ([Image],[Name], UserProfileId)

                        OUTPUT INSERTED.ID

                        VALUES
                       (@Image,@Name, @UserProfileId)";

                    DbUtils.AddParameter(cmd, "@Image", sign.Image);
                    DbUtils.AddParameter(cmd, "@name", sign.Name);
                    DbUtils.AddParameter(cmd, "@UserProfileId", sign.UserProfileId);




                    sign.Id = (int)cmd.ExecuteScalar();
                }
            }
        }


        public void DeleteSign(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM SignLanguage WHERE Id =@id";

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
        public SignLang GetSignByID(int id)
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
                                    c.[Name],
                                    c.UserProfileId
                                FROM SignLanguage c
                                where c.Id = @Id";

                    DbUtils.AddParameter(cmd, "@Id", id);

                    var reader = cmd.ExecuteReader();

                    var Signs = new SignLang();

                    while (reader.Read())
                    {
                        Signs.Id = DbUtils.GetInt(reader, "id");
                        Signs.Image = DbUtils.GetString(reader, "Image");
                        Signs.Name = DbUtils.GetString(reader, "Name");
                        Signs.UserProfileId = DbUtils.GetInt(reader, "UserProfileId");

                    }

                    reader.Close();

                    return Signs;
                }
            }
        }
        public List<SignLang> GetSignByUserId(int userProfileId)
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @" 
                                SELECT 
                                      s.[Image],
                                      s.[Name],
                                      s.Id,
                                      s.UserProfileId
                                    FROM SignLanguage s
                                   WHERE s.UserProfileId = @UserProfileId";

                    DbUtils.AddParameter(cmd, "@UserProfileId", userProfileId);

                    var reader = cmd.ExecuteReader();

                    var signs = new List<SignLang>();

                    while (reader.Read())
                    {

                        signs.Add(new SignLang()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            Image = DbUtils.GetString(reader, "Image"),
                            Name = DbUtils.GetString(reader, "Name"),
                            UserProfileId = DbUtils.GetInt(reader, "UserProfileId"),
                        });
                    }

                    reader.Close();

                    return signs;
                }
            }
        }

        public void UpdateSign(SignLang sign)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE SignLangague 
                             SET
                             [Image] = @image,
                             [Name]= @name
                             WHERE Id =@id";

                    DbUtils.AddParameter(cmd, "@Image", sign.Image);
                    DbUtils.AddParameter(cmd, "@content", sign.Name);
                    DbUtils.AddParameter(cmd, "@Id", sign.Id);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}