using Microsoft.Extensions.Configuration;
using Lume.Models;
using Lume.Utils;

namespace Lume.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public userProfile GetByFirebaseUserId(string FireBaseUserId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT up.Id, Up.FireBaseUserId, up.FirstName, up.LastName, 
                               up.Email    
                          FROM UserProfile up      
                         WHERE FireBaseUserId = @FireBaseUserId";

                    DbUtils.AddParameter(cmd, "@FireBaseUserId", FireBaseUserId);

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

        public void Add(userProfile userProfile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserProfile (FireBaseUserId,FirstName,LastName,
                                                                 Email)
                                        OUTPUT INSERTED.ID
                                        VALUES (@FirebaseId, @FirstName,
                                                @Email)";
                    DbUtils.AddParameter(cmd, "@FireBaseUserId", userProfile.FireBaseUserId);
                    DbUtils.AddParameter(cmd, "@FirstName", userProfile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", userProfile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", userProfile.Email);

                    userProfile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

    }
}