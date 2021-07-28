SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
    ([Id],[FirebaseId],[Name],[Email],[ImageUrl],[isAdmin])
VALUES
    (1, '1', 'Autumn','Acarte94@gmail.com',NULL,'0'),
    (2, '2', 'Nick','Nick@gmail.com',NULL,'0');
  
SET IDENTITY_INSERT [UserProfile] OFF


SET IDENTITY_INSERT [CommunicationCards] ON
INSERT INTO [CommunicationCards]
    ([Id],[UserProfileId],[Content],[Image])
VALUES
    (1, '1', 'Yes', 'NULL'),
    (2, '1', 'Apple','https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png '),
    (3, '2', 'Yes', 'NULL'),
    (4, '2', 'Apple','https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png ');
SET IDENTITY_INSERT [CommunicationCards] OFF


SET IDENTITY_INSERT [SignLanguage] ON
INSERT INTO [SignLanguage]
    ([Id],[UserProfileId],[Name],[Image])
VALUES
    (1,1,'Water','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water.svg'),
    (2,1,'Water','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water.svg'),
    (3,2,'Finished','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/finished.svg'),
    (4,2,'Finished','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/finished.svg')
SET IDENTITY_INSERT [SignLanguage] OFF

SET IDENTITY_INSERT [PecsInfo] ON
INSERT INTO [PecsInfo]
    ([Id],[UserProfileId],[Image])
VALUES
    (1,1,'https://i.pinimg.com/originals/3c/08/39/3c08398f33e44df487c76a2e57f02c0e.jpg')
    
SET IDENTITY_INSERT [PecsInfo] OFF
