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
userPassword varchar(50) not null,
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
insert into user values ('12345','Walter','White','wallbb@muvi.in','675467653','password123',true,1);
insert into user values ('321','Santiag David','Perez Bulla','david.bulla@cga.com.co','68451385','b',true,1);

-- events's initial data
insert into events values (null,'Happy birthday','A very special day','2024-02-16','12345');
insert into events values (null,'Animal party','The best party ever','2024-08-01','12345');
insert into events values (null,' Title number one','A drescription fo the event example','2024-08-01','321');
insert into events values (null,'Title number two','The better you can teste your app the better...','2024-02-29','321');
insert into events values (null,'Title number three','Dont worry about the future, only enjoy the moment','2024-03-14','321');
insert into events values (null,'Title number four','I learned programming with Java languaje','2024-09-12','321');
insert into events values (null,'Title number five','My cats are fat animals, but they are so sweet','2024-01-24','321');
insert into events values (null,'Title number six','This is the last descripcion of the last event','2024-07-07','321');
insert into events values (null,'Title number seven','Lorem imptus faire du lait et le chat noir est petti','2024-07-07','321');

select * from user;