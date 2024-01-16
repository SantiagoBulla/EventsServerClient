-- drop database eventsdb;
create database eventsdb;
use eventsdb;

create table rol (
idRol int primary key auto_increment auto_increment,
rolDescription  varchar(25) not null
);

create table user (
idUser varchar(25) primary key, 
name varchar(50) not null,
lastname varchar(50) not null,
email varchar(50) not null,
phone varchar(50),
status boolean not null,
idRolFK int,
foreign key (idRolFk) references rol (idRol) on update cascade on delete set null
);

create table events (
idEvent int primary key auto_increment,
nameEvent varchar(20) not null,
eventDescription varchar(50) not null,
eventDate date not null, 
idUserFK varchar(50),
foreign key (idUserFk) references user (idUser) on update cascade on delete cascade
);

-- rol's initial data
insert into rol values (1, 'Administrator'), (2,'standartUser');
select * from rol;