-- drop database eventsdb;
create database eventsdb;
use eventsdb;

create table rol (
idRol int primary key auto_increment auto_increment,
rolDescription  varchar(25) not null
);

create table user (
idUser varchar(25) primary key, 
userNames varchar(50) not null,
userSurnames varchar(50) not null,
userEmail varchar(50) not null,
userPhone varchar(50),
userStatus boolean not null,
idRolFK int,
foreign key (idRolFk) references rol (idRol) on update cascade on delete set null
);

create table events (
idEvent int primary key auto_increment,
eventName varchar(20) not null,
eventDescription varchar(50) not null,
eventDate date not null, 
idUserFK varchar(50),
foreign key (idUserFk) references user (idUser) on update cascade on delete cascade
);

-- rol's initial data
insert into rol values (1, 'Administrator'), (2,'standartUser');
select * from rol;

-- user's initial data
insert into user values ('12345','Walter','White','wallbb@muvi.in','675467653',true,1);

-- events's initial data
insert into events values (null,'Happy birthday','A very special day','2024-02-16','12345');
insert into events values (null,'Animal party','The best party ever','2024-08-01','12345');