DROP DATABASE IF EXISTS `Orquideas`;
CREATE DATABASE `Orquideas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `Orquideas`;

CREATE TABLE `Usuarios` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `correo` VARCHAR(50) NOT NULL,
    `rut` VARCHAR(50) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`correo`)
);

CREATE TABLE `Configuracion` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `usuario_id` INT NOT NULL,
    `frecuencia_registro` INT NOT NULL, 
    PRIMARY KEY (`id`),
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE
);

CREATE TABLE `Historico` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME NOT NULL,
    `humedad` FLOAT NOT NULL,
    `temperatura` FLOAT NOT NULL,
    `orquidea` VARCHAR(50) NOT NULL,
    `configuracion_id` INT,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`configuracion_id`) REFERENCES `configuracion`(`id`) ON DELETE SET NULL
);

CREATE TABLE `Calendario` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `fecha` DATE NOT NULL,
    `riego` TIME NOT NULL,
    `orquidea` VARCHAR(50) NOT NULL,
    `usuario_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE
);

INSERT INTO usuarios (id, nombre, correo, rut, password) VALUES
(1, 'Juan Perez', 'juanperez@example.com', '12345678-9', '$2b$12$E3n.6nOLtFXz.pK7Ulv9meqlB6eyBxZjoF4kSe9x6Sv5ZGIzqN2Di'), -- password123
(2, 'Maria Gomez', 'mariagomez@example.com', '98765432-1', '$2b$12$VZ7Eix5Cey.3zYmPpVr5AOGtBM.qN1vufF3WORpKq9D2FwWobZT.u'), -- mypassword
(3, 'Carlos Torres', 'carlostorres@example.com', '11111111-1', '$2b$12$PPMPb8jK4MgZ39/UG7cF7OBPPpgv1LfDLbP.0FK7O8wSbdCu5gE7a'), -- car123
(4, 'Ana Ramirez', 'anaramires@example.com', '22222222-2', '$2b$12$Z4rPV5MiF8Hg3cXxo5CskO6avuw5hb5h9iT7eA4rVHLyDN1H0COnW'), -- ana456z
(5, 'Pedro Castillo', 'pedrocastillo@example.com', '33333333-3', '$2b$12$3ECqLhbBQ0IVODy42JKMjeJ6Hz9i8PbHoHsox1c.aDbGH//k5I3YS'), -- pedro789
(6, 'Laura Fernández', 'laurafernandez@example.com', '44444444-4', '$2b$12$KJBlm5uDZaPV0EQyT8KcGe1mXxNZlHDyZaToKTlHj85Z9fy4M0JK6'), -- laura123
(7, 'Jorge Morales', 'jorgemorales@example.com', '55555555-5', '$2b$12$2x.PB3Fi6Lf4dDbfQJ9K4uHqJx/UeL5A7F/DHjVb3tA3LzIxuOotG'), -- jorge456
(8, 'Sofia López', 'sofialopez@example.com', '66666666-6', '$2b$12$RQEK3EdS/ZmNPlBFbNOfd.i/A6ZnL2MvLkHSPsGj0OiXnYcQvl1Gy'), -- sofia789
(9, 'Ricardo Diaz', 'ricardodiaz@example.com', '77777777-7', '$2b$12$C8rwOR5xjF6XdpFw0YBNte0Gnpxw1TW9bsjIJiZQGOjKi5Mo9IJ7u'), -- ricardo123
(10, 'Elena Cruz', 'elenacruz@example.com', '88888888-8', '$2b$12$ZW0H2UqJ9iGYxphSMVt4lOU11hvC7FwKoMBDz7vvV6Sj4ihz/Chza'); -- elena456

INSERT INTO Configuracion (usuario_id, frecuencia_registro) VALUES
(1, 4),
(2, 6), 
(3, 12), 
(4, 24), 
(5, 8),
(6, 5),
(7, 10),  
(8, 24),  
(9, 3),  
(10, 7);   

INSERT INTO Historico (fecha, humedad, temperatura, orquidea, configuracion_id) VALUES
('2024-10-25 08:00:00', 55.0, 22.5, 'Orquidea Blanca', 1),
('2024-10-26 14:00:00', 60.0, 21.0, 'Orquidea Rosa', 2),
('2024-10-27 08:00:00', 65.5, 23.0, 'Orquidea Amarilla', 3),
('2024-10-28 08:00:00', 50.0, 22.5, 'Orquidea Morada', 4),
('2024-10-29 16:00:00', 58.0, 20.0, 'Orquidea Azul', 5),
('2024-10-30 13:00:00', 62.0, 21.5, 'Orquidea Blanca', 6),
('2024-10-31 08:00:00', 59.5, 22.0, 'Orquidea Rosa', 7),
('2024-11-01 18:00:00', 61.0, 23.5, 'Orquidea Amarilla', 8),
('2024-11-02 11:00:00', 57.0, 21.0, 'Orquidea Morada', 9),
('2024-11-03 14:00:00', 55.0, 20.5, 'Orquidea Azul', 10);


INSERT INTO Calendario (fecha, riego, orquidea, usuario_id) VALUES
('2024-10-25', '08:00:00', 'Orquidea Blanca', 1),
('2024-10-26', '09:00:00', 'Orquidea Rosa', 2),
('2024-10-27', '07:30:00', 'Orquidea Amarilla', 3),
('2024-10-28', '08:45:00', 'Orquidea Morada', 4),
('2024-10-29', '10:00:00', 'Orquidea Azul', 5),
('2024-10-30', '11:15:00', 'Orquidea Blanca', 1),
('2024-10-31', '08:30:00', 'Orquidea Rosa', 2),
('2024-11-01', '09:45:00', 'Orquidea Amarilla', 3),
('2024-11-02', '08:15:00', 'Orquidea Morada', 4),
('2024-11-03', '07:45:00', 'Orquidea Azul', 5);