/* Postgre SQL */

CREATE DATABASE musicfy;

\c musicfy

CREATE TABLE artist (
    idArtist serial,
    name varchar(30) not null,
    CONSTRAINT PK_artist PRIMARY KEY(idArtist)
);

CREATE TABLE gender (
    idGender serial,
    name varchar(50) not null,
    CONSTRAINT PK_genero PRIMARY KEY(idGender)
);

CREATE TABLE album (
    idAlbum serial,
    idArtist int not null,
    idGender int not null,
    name varchar(30) not null,
    year int not null,
    CONSTRAINT PK_album PRIMARY KEY(idAlbum),
    CONSTRAINT FK_artist_album FOREIGN KEY(idArtist) REFERENCES artist,
    CONSTRAINT FK_gender_album FOREIGN key(idGender) REFERENCES gender
);

CREATE TABLE music (
    idMusic serial,
    idAlbum int not null,
    track int not null,
    name varchar(30) not null,
    time char(7) not null,
    CONSTRAINT PK_music PRIMARY KEY(idMusic),
    CONSTRAINT FK_album_Music FOREIGN KEY(idAlbum) REFERENCES album
);

INSERT INTO gender (name) VALUES ('Rock');
INSERT INTO gender (name) VALUES ('Pop/Rock');
INSERT INTO gender (name) VALUES ('Hip Hop');
INSERT INTO gender (name) VALUES ('Rap');
INSERT INTO gender (name) VALUES ('Indie Rock');
INSERT INTO gender (name) VALUES ('Heavy Metal');
INSERT INTO gender (name) VALUES ('Hard Rock');
INSERT INTO gender (name) VALUES ('Punk');
INSERT INTO gender (name) VALUES ('Hardcore Punk');
INSERT INTO gender (name) VALUES ('Blues');
INSERT INTO gender (name) VALUES ('Jazz');
INSERT INTO gender (name) VALUES ('MPB');
INSERT INTO gender (name) VALUES ('Forro');
INSERT INTO gender (name) VALUES ('Country/Sertanejo');
INSERT INTO gender (name) VALUES ('Bossa Nova');
INSERT INTO gender (name) VALUES ('Axe');
INSERT INTO gender (name) VALUES ('Orchestra');
INSERT INTO gender (name) VALUES ('Opera');
INSERT INTO gender (name) VALUES ('Reggae');

INSERT INTO artist(name) VALUES('Metallica');
INSERT INTO artist(name) VALUES('Guns N Roses');
INSERT INTO artist(name) VALUES('Iron Maiden');
INSERT INTO artist(name) VALUES('A-ha');
INSERT INTO artist(name) VALUES('Scorpions');
INSERT INTO artist(name) VALUES('Linkin Park');
INSERT INTO artist(name) VALUES('Edguy');
INSERT INTO artist(name) VALUES('Queen');
INSERT INTO artist(name) VALUES('Helloween');
INSERT INTO artist(name) VALUES('Disturbed');

INSERT INTO album(idArtist, idGender, name, year) VALUES (1, 6,'Ride The Lightning',1984);
INSERT INTO album(idArtist, idGender, name, year) VALUES(2, 7, 'Use Your Illusion I', 1991);
INSERT INTO album(idArtist, idGender, name, year) VALUES(3, 6, 'Fear of The Dark', 1992);
INSERT INTO album(idArtist, idGender, name, year) VALUES(4, 2, 'Scoundrel Days', 1986);
INSERT INTO album(idArtist, idGender, name, year) VALUES(5, 7, 'Lovedrive', 1979);

-- Metallica (1984) - Ride The Lightning

INSERT INTO music (idAlbum,track,name,time) VALUES (1,1,'Fight Fire With Fire','04m:47s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,2,'Ride The Lightning','06m:38s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,3,'For Whom The Bell Tolls','05m:1s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,4,'Fade To Black','06m:57s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,5,'Trapped Under Ice','04m:05s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,6,'Escape','04m:26s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,7,'Creeping Death','06m:38s');
INSERT INTO music (idAlbum,track,name,time) VALUES (1,8,'The Call Of Ktulu','08m:53s');

-- Guns N' Roses (1991) - Use Your Illusino I

INSERT INTO Music (idAlbum,track,name,time) VALUES (2,1,'Right Next Door To Hell','03m:02s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,2,'Dust N Bones','04m:58s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,3,'Live And Let Die','03m:04s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,4,'Don t cry','04m:45s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,5,'Perfect Crime','02m:24s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,6,'EscapeYou Ain t The First','02m:36s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,7,'Bad Obsession','05m:28s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,8,'Back Off Bitch','05m:04s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,9,'Double Talkin Jive','03m:24s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,10,'November Rain','08m:58s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,11,'The Garden','05m:22s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,12,'Garden Of Eden','02m:42s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,13,'Don t Damn Me','05m:19s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,14,'Bad Apples','04m:28s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,15,'Dead Horse','04m:18s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (2,16,'Coma','10m:14s');

-- Iron Maiden (1991) - Fear of The Dark (Guilherme)

INSERT INTO Music (idAlbum,track,name,time) VALUES (3,1,'Be Quick or Be Dead','03m:24s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,2,'From Here to Eternity','03m:38s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,3,'Afraid to Shoot Strangers','06m:56s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,4,'Fear Is The Key','05m:35s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,5,'Childhood s End','04m:40s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,6,'Wasting Love','05m:50s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,7,'The Fugitive','04m:54s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,8,'Chains of Misery','03m:37s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,9,'The Apparition','03m:54s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,10,'Judas Be My Guide','03m:08s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,11,'Weekend Warrior','05m:39s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (3,12,'Fear of the Dark','07m:16s');

-- A-ha (1986) - Scoundrel Days

INSERT INTO Music (idAlbum,track,name,time) VALUES (4,1,'Scoundrel Days','03m:56s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,2,'The Swing of Things','04m:14s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,3,'I ve Been Losing You','04m:24s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,4,'October','03m:48s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,5,'Manhattan Skyline','04m:52s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,6,'Cry Wolf','05m:50s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,7,'We re Looking for the Whales','03m:39s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,8,'The Weight of the Wind','03m:57s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,9,'Maybe, Maybe','02m:34s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (4,10,'Soft Rains of April','03m:12s');


-- Scorpions (1979) - Lovedrive

INSERT INTO Music (idAlbum,track,name,time) VALUES (5,1,'Loving You Sunday Morning','05m:38s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,2,'Another Piece of Meat','03m:34s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,3,'Always Somewhere','04m:58s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,4,'Coast to Coast','04m:43s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,5,'Can t Get Enough','02m:38s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,6,'Is There Anybody There','03m:59s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,7,'Lovedrive','04m:52s');
INSERT INTO Music (idAlbum,track,name,time) VALUES (5,8,'Holiday','06m:31s');