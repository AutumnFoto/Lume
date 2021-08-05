
SET IDENTITY_INSERT  [UserProfile] ON
INSERT INTO [UserProfile]
    ([Id],[FirebaseUserId],[FirstName],[LastName],[Email])
VALUES
    (1, 'Chj1Li0aVHeX2hlWCy36KULCwA43', 'Autumn','Fotopoulos','Acarte94@gmail.com'),
    (2, 'LTs3aRZvDmRjny8ZXYj2fiBmtX32', 'Nick','Fotopoulos','Nick@gmail.com');
  
SET IDENTITY_INSERT [UserProfile] OFF 

delete from CommunicationCards
SET IDENTITY_INSERT [CommunicationCards] ON
INSERT INTO [CommunicationCards]
    ([Id],[UserProfileId],[Content],[Image])
VALUES
    (1, '1', 'Yes','NULL'),
    (2, '1', 'Apple','https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png '),
    (3, '2', 'No','NULL'),
    (4, '2', 'Apple','https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png ');

   

delete from SignLanguage
SET IDENTITY_INSERT [SignLanguage] ON
INSERT INTO [SignLanguage]
    ([Id],[UserProfileId],[Name],[Image])
VALUES
    (1,1,'Water','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water.svg'),
    (2,1,'Water','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/water.svg'),
    (3,2,'Finished','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/finished.svg'),
    (4,2,'Finished','https://res.cloudinary.com/spiralyze/image/upload/f_auto,w_auto/BabySignLanguage/DictionaryPages/finished.svg')
SET IDENTITY_INSERT [SignLanguage] OFF

delete from PecsInfo
SET IDENTITY_INSERT [PecsInfo] ON
INSERT INTO [PecsInfo]
    ([Id],[Image])
VALUES
    (1,'https://i.pinimg.com/originals/3c/08/39/3c08398f33e44df487c76a2e57f02c0e.jpg')
    
SET IDENTITY_INSERT [PecsInfo] OFF
