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
  [FirebaseId] INTEGER NOT NULL,
  [Name] VARCHAR(25) NOT NULL,
  [Email] VARCHAR(255) NOT NULL,
  [ImageUrl] VARCHAR(255) NULL,
  [isAdmin] VARCHAR(255) NOT NULL,
 
)
GO


CREATE TABLE [CommunicationCards] (
  [Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [Content] VARCHAR(255) NOT NULL,
  [Image] VARCHAR(255) NOT NULL,
)
GO

CREATE TABLE [SignLanguage] (
  [Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [Name] VARCHAR(255) NOT NULL,
  [Image] VARCHAR(255) NOT NULL,
)
GO

CREATE TABLE [PecsInfo] (
[Id] INTEGER PRIMARY KEY IDENTITY NOT NULL,
  [UserProfileId] INTEGER NOT NULL,
  [Image] VARCHAR(255) NOT NULL,
)
GO



ALTER TABLE [CommunicationCards] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [SignLanguage] ADD FOREIGN KEY ([UserProfileId])  REFERENCES [UserProfile] ([Id])
GO
GO

ALTER TABLE [PecsInfo] ADD FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
GO
GO
