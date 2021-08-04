USE [master]
GO

IF db_id('Lume') IS NOT NULL
BEGIN
  ALTER DATABASE [Lume] SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
  DROP DATABASE [Lume]
END
GO

CREATE DATABASE [Lume]
GO

USE [Lume]
GO
---------------------------------------------------------------------
CREATE TABLE [UserProfile] (
  [Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
  [FirebaseUserId] VARCHAR(28) NOT NULL,
  [FirstName] NVARCHAR(50) NOT NULL,
  [LastName] NVARCHAR(50) NOT NULL,
  [Email] VARCHAR(255) NOT NULL,

  CONSTRAINT UQ_FirebaseUserId UNIQUE(FirebaseUserId)
)
GO


CREATE TABLE [CommunicationCards] (
  [Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [Content] VARCHAR(255) NOT NULL,
  [Image] VARCHAR(255) NULL,
)
GO

CREATE TABLE [SignLanguage] (
  [Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [Name] VARCHAR(255) NOT NULL,
  [Image] VARCHAR(255) NULL,
)
GO

CREATE TABLE [PecsInfo] (
[Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
[Image] VARCHAR(255) NULL,
)
GO



ALTER TABLE [CommunicationCards] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [SignLanguage] ADD FOREIGN KEY ([UserProfileId])  REFERENCES [UserProfile] ([Id])
GO
GO


GO
GO
