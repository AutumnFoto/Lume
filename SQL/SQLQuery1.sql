SELECT 
c.[image],
c.content,
c.UserProfileId,
[UserProfile].Id
FROM CommunicationCards c
LEFT JOIN [UserProfile]
ON c.UserProfileId = [UserProfile].id
WHERE c.UserProfileId = 1