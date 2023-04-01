CREATE DATABASE estudiantes;
use estudiantes;

create table alumnos(
id int primary key not null auto_increment,
nombre varchar(250),
apellido varchar(250),
correo varchar(250),
edad varchar(250)
);

insert into alumnos values(1,'Fabrizio','Quispe','fabrizioquispe1900@gmail.com','21');
insert into alumnos values(2,'Juan','Carlos','carlosjuanito@gmail.com','32');
insert into alumnos values(3,'Renzo','Garcia','rezogar@gmail.com','24');

delete from alumnos where id = 2;
select * from alumnos;
describe alumnos;