# Guía Completa de SQL con Ejemplos

## Tabla de Contenidos
1. [Introducción a SQL](##introducción-a-sql)
2. [Tipos de Datos](##tipos-de-datos)
3. [Crear y Eliminar Bases de Datos](##crear-y-eliminar-bases-de-datos)
4. [Crear, Modificar y Eliminar Tablas](##crear-modificar-y-eliminar-tablas)
5. [INSERT - Insertar Datos](##insert---insertar-datos)
6. [SELECT - Consultar Datos](##select---consultar-datos)
7. [WHERE - Filtrar Datos](##where---filtrar-datos)
8. [UPDATE - Actualizar Datos](##update---actualizar-datos)
9. [DELETE - Eliminar Datos](##delete---eliminar-datos)
10. [ORDER BY - Ordenar Resultados](##order-by---ordenar-resultados)
11. [Funciones de Agregación](##funciones-de-agregación)
12. [GROUP BY y HAVING](##group-by-y-having)
13. [JOIN - Unir Tablas](##join---unir-tablas)
14. [Subconsultas](##subconsultas)
15. [UNION y Operadores de Conjunto](##union-y-operadores-de-conjunto)
16. [Constraints (Restricciones)](##constraints-restricciones)
17. [Índices](##índices)
18. [Vistas](##vistas)
19. [Procedimientos Almacenados](##procedimientos-almacenados)
20. [Triggers (Disparadores)](##triggers-disparadores)
21. [Transacciones](##transacciones)
22. [Funciones de Texto](##funciones-de-texto)
23. [Funciones de Fecha](##funciones-de-fecha)
24. [Funciones Matemáticas](##funciones-matemáticas)
25. [CASE y Lógica Condicional](##case-y-lógica-condicional)

---

## Introducción a SQL

SQL (Structured Query Language) es el lenguaje estándar para gestionar y manipular bases de datos relacionales. SQL permite crear, leer, actualizar y eliminar datos (CRUD).

### Categorías de SQL

**DDL (Data Definition Language)** - Definición de datos
- CREATE, ALTER, DROP, TRUNCATE

**DML (Data Manipulation Language)** - Manipulación de datos
- SELECT, INSERT, UPDATE, DELETE

**DCL (Data Control Language)** - Control de datos
- GRANT, REVOKE

**TCL (Transaction Control Language)** - Control de transacciones
- COMMIT, ROLLBACK, SAVEPOINT

### Comentarios en SQL

```sql
-- Este es un comentario de una línea

/* 
   Este es un comentario
   de múltiples líneas
*/

SELECT * FROM clientes; -- Comentario al final de línea
```

### Convenciones de Nomenclatura

```sql
-- Nombres en minúsculas con guiones bajos (snake_case)
CREATE TABLE nombre_tabla (
    columna_uno VARCHAR(50),
    columna_dos INT
);

-- O PascalCase (depende de la convención del proyecto)
CREATE TABLE NombreTabla (
    ColumnaUno VARCHAR(50),
    ColumnaDos INT
);

-- SQL no es case-sensitive para palabras clave
SELECT * FROM clientes;
select * from clientes;  -- Mismo resultado
SeLeCt * FrOm clientes;  -- Mismo resultado (pero no recomendado)
```

---

## Tipos de Datos

### Tipos Numéricos

```sql
-- Enteros
TINYINT     -- -128 a 127
SMALLINT    -- -32,768 a 32,767
MEDIUMINT   -- -8,388,608 a 8,388,607
INT         -- -2,147,483,648 a 2,147,483,647
BIGINT      -- Números muy grandes

-- Enteros sin signo (solo positivos)
TINYINT UNSIGNED    -- 0 a 255
INT UNSIGNED        -- 0 a 4,294,967,295

-- Decimales
DECIMAL(10,2)   -- 10 dígitos totales, 2 decimales (exacto)
NUMERIC(10,2)   -- Similar a DECIMAL
FLOAT           -- Número de punto flotante (aproximado)
DOUBLE          -- Doble precisión (aproximado)

-- Ejemplo de tabla con tipos numéricos
CREATE TABLE productos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT UNSIGNED,
    peso FLOAT,
    calificacion TINYINT
);
```

### Tipos de Texto

```sql
-- Textos de longitud fija
CHAR(10)        -- Siempre ocupa 10 caracteres

-- Textos de longitud variable
VARCHAR(255)    -- Hasta 255 caracteres
TEXT            -- Hasta 65,535 caracteres
MEDIUMTEXT      -- Hasta 16,777,215 caracteres
LONGTEXT        -- Hasta 4,294,967,295 caracteres

-- Ejemplo
CREATE TABLE articulos (
    id INT PRIMARY KEY,
    titulo VARCHAR(200),
    resumen TEXT,
    contenido LONGTEXT,
    codigo_postal CHAR(5)
);
```

### Tipos de Fecha y Hora

```sql
DATE            -- Fecha: YYYY-MM-DD
TIME            -- Hora: HH:MM:SS
DATETIME        -- Fecha y hora: YYYY-MM-DD HH:MM:SS
TIMESTAMP       -- Marca de tiempo (guarda cambios automáticos)
YEAR            -- Año: YYYY

-- Ejemplo
CREATE TABLE eventos (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    fecha_evento DATE,
    hora_inicio TIME,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    ultima_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Tipos Booleanos

```sql
-- Boolean (se almacena como TINYINT: 0 = false, 1 = true)
BOOLEAN
BOOL

-- Ejemplo
CREATE TABLE usuarios (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    activo BOOLEAN DEFAULT TRUE,
    verificado BOOL DEFAULT FALSE
);
```

### Otros Tipos

```sql
-- Enumeraciones
ENUM('pequeño', 'mediano', 'grande')

-- Set (conjunto de valores)
SET('rojo', 'verde', 'azul')

-- Binarios
BINARY(16)      -- Datos binarios de longitud fija
VARBINARY(255)  -- Datos binarios de longitud variable
BLOB            -- Binary Large Object

-- JSON (MySQL 5.7+)
JSON

-- Ejemplo con tipos especiales
CREATE TABLE productos_config (
    id INT PRIMARY KEY,
    tamaño ENUM('S', 'M', 'L', 'XL'),
    colores_disponibles SET('rojo', 'azul', 'verde', 'negro'),
    configuracion JSON
);
```

---

## Crear y Eliminar Bases de Datos

### Crear Base de Datos

```sql
-- Crear base de datos básica
CREATE DATABASE mi_tienda;

-- Crear solo si no existe
CREATE DATABASE IF NOT EXISTS mi_tienda;

-- Con conjunto de caracteres específico
CREATE DATABASE mi_tienda
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Ver bases de datos
SHOW DATABASES;

-- Seleccionar base de datos para usar
USE mi_tienda;

-- Ver base de datos actual
SELECT DATABASE();
```

### Eliminar Base de Datos

```sql
-- Eliminar base de datos
DROP DATABASE mi_tienda;

-- Eliminar solo si existe
DROP DATABASE IF EXISTS mi_tienda;

-- CUIDADO: Esta operación es irreversible y elimina todos los datos
```

---

## Crear, Modificar y Eliminar Tablas

### Crear Tablas

```sql
-- Tabla básica
CREATE TABLE clientes (
    id INT,
    nombre VARCHAR(100),
    email VARCHAR(100),
    edad INT
);

-- Tabla con PRIMARY KEY
CREATE TABLE clientes (
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100)
);

-- Con AUTO_INCREMENT
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    edad INT DEFAULT 18,
    fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla completa con múltiples constraints
CREATE TABLE empleados (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    salario DECIMAL(10,2) CHECK (salario > 0),
    departamento_id INT,
    fecha_contratacion DATE DEFAULT (CURRENT_DATE),
    activo BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id),
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);

-- Tabla con múltiples columnas como PRIMARY KEY (clave compuesta)
CREATE TABLE inscripciones (
    estudiante_id INT,
    curso_id INT,
    fecha_inscripcion DATE,
    PRIMARY KEY (estudiante_id, curso_id)
);

-- Crear tabla desde otra tabla
CREATE TABLE clientes_backup AS
SELECT * FROM clientes;

-- Crear tabla vacía con misma estructura
CREATE TABLE clientes_copia LIKE clientes;

-- Ver estructura de tabla
DESCRIBE clientes;
DESC clientes;
SHOW COLUMNS FROM clientes;

-- Ver todas las tablas
SHOW TABLES;
```

### Modificar Tablas (ALTER)

```sql
-- Agregar columna
ALTER TABLE clientes
ADD COLUMN direccion VARCHAR(200);

-- Agregar múltiples columnas
ALTER TABLE clientes
ADD COLUMN ciudad VARCHAR(100),
ADD COLUMN codigo_postal VARCHAR(10);

-- Eliminar columna
ALTER TABLE clientes
DROP COLUMN direccion;

-- Modificar tipo de dato de columna
ALTER TABLE clientes
MODIFY COLUMN email VARCHAR(200);

-- Renombrar columna
ALTER TABLE clientes
CHANGE COLUMN nombre nombre_completo VARCHAR(150);

-- O en MySQL/MariaDB más reciente
ALTER TABLE clientes
RENAME COLUMN nombre TO nombre_completo;

-- Agregar PRIMARY KEY
ALTER TABLE clientes
ADD PRIMARY KEY (id);

-- Eliminar PRIMARY KEY
ALTER TABLE clientes
DROP PRIMARY KEY;

-- Agregar FOREIGN KEY
ALTER TABLE pedidos
ADD CONSTRAINT fk_cliente
FOREIGN KEY (cliente_id) REFERENCES clientes(id);

-- Eliminar FOREIGN KEY
ALTER TABLE pedidos
DROP FOREIGN KEY fk_cliente;

-- Agregar UNIQUE constraint
ALTER TABLE clientes
ADD CONSTRAINT unique_email UNIQUE (email);

-- Agregar DEFAULT
ALTER TABLE clientes
ALTER COLUMN activo SET DEFAULT TRUE;

-- Renombrar tabla
ALTER TABLE clientes
RENAME TO clientes_nuevos;

-- O usando RENAME TABLE
RENAME TABLE clientes TO clientes_nuevos;
```

### Eliminar Tablas

```sql
-- Eliminar tabla
DROP TABLE clientes;

-- Eliminar solo si existe
DROP TABLE IF EXISTS clientes;

-- Eliminar múltiples tablas
DROP TABLE IF EXISTS tabla1, tabla2, tabla3;

-- Vaciar tabla (elimina datos, mantiene estructura)
TRUNCATE TABLE clientes;

-- Diferencia entre TRUNCATE y DELETE
DELETE FROM clientes;  -- Elimina fila por fila, más lento, se puede revertir
TRUNCATE TABLE clientes;  -- Elimina todo, muy rápido, no se puede revertir
```

---

## INSERT - Insertar Datos

### Insertar Datos Básico

```sql
-- Insertar un registro
INSERT INTO clientes (nombre, email, edad)
VALUES ('Juan Pérez', 'juan@email.com', 30);

-- Insertar sin especificar columnas (debe seguir el orden)
INSERT INTO clientes
VALUES (1, 'Ana García', 'ana@email.com', 25);

-- Insertar múltiples registros
INSERT INTO clientes (nombre, email, edad)
VALUES 
    ('Pedro López', 'pedro@email.com', 35),
    ('María Rodríguez', 'maria@email.com', 28),
    ('Carlos Sánchez', 'carlos@email.com', 42);

-- Insertar con valores DEFAULT
INSERT INTO clientes (nombre, email)
VALUES ('Luis Martínez', 'luis@email.com');
-- Las columnas no especificadas usarán sus valores DEFAULT

-- Insertar solo en algunas columnas
INSERT INTO productos (nombre, precio)
VALUES ('Laptop', 899.99);
```

### Insertar desde otra tabla

```sql
-- Copiar datos de una tabla a otra
INSERT INTO clientes_backup
SELECT * FROM clientes;

-- Copiar solo algunas columnas
INSERT INTO resumen_clientes (nombre, email)
SELECT nombre, email FROM clientes;

-- Copiar con condición
INSERT INTO clientes_premium (nombre, email, edad)
SELECT nombre, email, edad 
FROM clientes 
WHERE edad >= 18;
```

### INSERT con ON DUPLICATE KEY

```sql
-- MySQL: actualizar si existe, insertar si no existe
INSERT INTO productos (id, nombre, precio, stock)
VALUES (1, 'Laptop', 899.99, 10)
ON DUPLICATE KEY UPDATE 
    precio = VALUES(precio),
    stock = stock + VALUES(stock);

-- Alternativa con REPLACE
REPLACE INTO productos (id, nombre, precio)
VALUES (1, 'Laptop', 950.00);
```

---

## SELECT - Consultar Datos

### SELECT Básico

```sql
-- Seleccionar todas las columnas
SELECT * FROM clientes;

-- Seleccionar columnas específicas
SELECT nombre, email FROM clientes;

-- Seleccionar con alias
SELECT 
    nombre AS nombre_cliente,
    email AS correo_electronico,
    edad AS años
FROM clientes;

-- Alias sin AS
SELECT nombre "Nombre Completo", email Correo
FROM clientes;

-- Seleccionar valores únicos
SELECT DISTINCT ciudad FROM clientes;

-- Seleccionar con cálculos
SELECT 
    nombre,
    precio,
    precio * 0.9 AS precio_con_descuento,
    precio * 1.21 AS precio_con_iva
FROM productos;
```

### LIMIT - Limitar Resultados

```sql
-- Obtener primeros 5 registros
SELECT * FROM clientes LIMIT 5;

-- Paginación: saltar 10, tomar 5
SELECT * FROM clientes LIMIT 5 OFFSET 10;

-- Forma corta (MySQL)
SELECT * FROM clientes LIMIT 10, 5;  -- Salta 10, toma 5

-- Primeros 3 clientes más jóvenes
SELECT * FROM clientes
ORDER BY edad ASC
LIMIT 3;
```

### SELECT con Expresiones

```sql
-- Concatenar strings
SELECT CONCAT(nombre, ' - ', email) AS info_cliente
FROM clientes;

-- Con separador
SELECT CONCAT_WS(' | ', nombre, email, ciudad) AS datos
FROM clientes;

-- Operaciones matemáticas
SELECT 
    nombre,
    precio,
    stock,
    precio * stock AS valor_inventario
FROM productos;

-- Condiciones en SELECT
SELECT 
    nombre,
    precio,
    CASE 
        WHEN precio < 100 THEN 'Económico'
        WHEN precio < 500 THEN 'Medio'
        ELSE 'Premium'
    END AS categoria
FROM productos;
```

---

## WHERE - Filtrar Datos

### Operadores de Comparación

```sql
-- Igual
SELECT * FROM clientes WHERE edad = 25;

-- Diferente
SELECT * FROM clientes WHERE edad != 25;
SELECT * FROM clientes WHERE edad <> 25;  -- Misma función

-- Mayor y menor
SELECT * FROM productos WHERE precio > 100;
SELECT * FROM productos WHERE precio < 50;
SELECT * FROM productos WHERE precio >= 100;
SELECT * FROM productos WHERE precio <= 50;
```

### Operadores Lógicos

```sql
-- AND: ambas condiciones deben cumplirse
SELECT * FROM clientes 
WHERE edad >= 18 AND edad <= 65;

-- OR: al menos una condición debe cumplirse
SELECT * FROM clientes 
WHERE ciudad = 'Madrid' OR ciudad = 'Barcelona';

-- NOT: invierte la condición
SELECT * FROM clientes 
WHERE NOT ciudad = 'Madrid';

-- Combinación de operadores
SELECT * FROM productos
WHERE (categoria = 'Electrónica' OR categoria = 'Computadoras')
  AND precio < 1000
  AND stock > 0;
```

### BETWEEN

```sql
-- Rango de valores (inclusivo)
SELECT * FROM productos
WHERE precio BETWEEN 100 AND 500;

-- Equivalente a:
SELECT * FROM productos
WHERE precio >= 100 AND precio <= 500;

-- Con fechas
SELECT * FROM pedidos
WHERE fecha_pedido BETWEEN '2024-01-01' AND '2024-12-31';

-- NOT BETWEEN
SELECT * FROM productos
WHERE precio NOT BETWEEN 100 AND 500;
```

### IN

```sql
-- Múltiples valores posibles
SELECT * FROM clientes
WHERE ciudad IN ('Madrid', 'Barcelona', 'Valencia');

-- Equivalente a:
SELECT * FROM clientes
WHERE ciudad = 'Madrid' 
   OR ciudad = 'Barcelona' 
   OR ciudad = 'Valencia';

-- NOT IN
SELECT * FROM clientes
WHERE ciudad NOT IN ('Madrid', 'Barcelona');

-- Con subconsulta
SELECT * FROM productos
WHERE categoria_id IN (SELECT id FROM categorias WHERE activa = TRUE);
```

### LIKE - Patrones de Texto

```sql
-- % representa cualquier cantidad de caracteres
SELECT * FROM clientes
WHERE nombre LIKE 'Juan%';  -- Nombres que empiezan con "Juan"

SELECT * FROM clientes
WHERE email LIKE '%@gmail.com';  -- Emails de Gmail

SELECT * FROM productos
WHERE nombre LIKE '%laptop%';  -- Contiene "laptop"

-- _ representa un solo carácter
SELECT * FROM clientes
WHERE telefono LIKE '6________';  -- Teléfonos que empiezan con 6 y tienen 9 dígitos

-- NOT LIKE
SELECT * FROM clientes
WHERE email NOT LIKE '%@gmail.com';

-- Case-sensitive (depende del collation)
SELECT * FROM productos
WHERE nombre LIKE BINARY 'laptop%';  -- Sensible a mayúsculas

-- Escapar caracteres especiales
SELECT * FROM articulos
WHERE titulo LIKE '%50\% descuento%';  -- Busca "50% descuento"
```

### REGEXP - Expresiones Regulares

```sql
-- MySQL soporta expresiones regulares
SELECT * FROM clientes
WHERE email REGEXP '^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$';

-- Empieza con vocal
SELECT * FROM clientes
WHERE nombre REGEXP '^[AEIOUaeiou]';

-- Contiene números
SELECT * FROM productos
WHERE codigo REGEXP '[0-9]';
```

### IS NULL / IS NOT NULL

```sql
-- Valores nulos
SELECT * FROM clientes
WHERE telefono IS NULL;

-- Valores no nulos
SELECT * FROM clientes
WHERE telefono IS NOT NULL;

-- No usar = NULL o != NULL (no funciona correctamente)
-- ❌ Incorrecto:
SELECT * FROM clientes WHERE telefono = NULL;

-- ✅ Correcto:
SELECT * FROM clientes WHERE telefono IS NULL;
```

### Ejemplos Combinados

```sql
-- Consulta compleja
SELECT * FROM productos
WHERE categoria = 'Electrónica'
  AND precio BETWEEN 200 AND 1000
  AND (marca = 'Samsung' OR marca = 'Apple')
  AND stock > 0
  AND nombre LIKE '%Pro%'
  AND descuento IS NOT NULL;

-- Búsqueda de clientes activos en ciertas ciudades
SELECT nombre, email, ciudad
FROM clientes
WHERE activo = TRUE
  AND edad >= 18
  AND ciudad IN ('Madrid', 'Barcelona', 'Valencia')
  AND fecha_registro >= '2024-01-01'
ORDER BY fecha_registro DESC;
```

---

## UPDATE - Actualizar Datos

### UPDATE Básico

```sql
-- Actualizar un campo
UPDATE clientes
SET email = 'nuevo@email.com'
WHERE id = 1;

-- Actualizar múltiples campos
UPDATE clientes
SET 
    email = 'nuevo@email.com',
    telefono = '123456789',
    ciudad = 'Madrid'
WHERE id = 1;

-- Actualizar con cálculo
UPDATE productos
SET precio = precio * 1.10
WHERE categoria = 'Electrónica';

-- Actualizar basado en otra columna
UPDATE empleados
SET salario = salario * 1.05
WHERE antiguedad >= 5;
```

### UPDATE con Condiciones

```sql
-- Actualizar múltiples registros
UPDATE productos
SET stock = stock - 1
WHERE categoria = 'Ropa' AND stock > 0;

-- Actualizar con CASE
UPDATE productos
SET descuento = CASE
    WHEN precio > 1000 THEN 15
    WHEN precio > 500 THEN 10
    WHEN precio > 100 THEN 5
    ELSE 0
END;

-- Actualizar con subconsulta
UPDATE empleados
SET salario = (SELECT AVG(salario) FROM empleados WHERE departamento_id = 1)
WHERE departamento_id = 1 AND salario < (SELECT AVG(salario) FROM empleados);
```

### UPDATE con JOIN

```sql
-- Actualizar usando datos de otra tabla
UPDATE pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
SET p.descuento = 10
WHERE c.tipo = 'Premium';

-- Ejemplo más complejo
UPDATE productos p
INNER JOIN categorias c ON p.categoria_id = c.id
SET p.precio = p.precio * 0.9
WHERE c.nombre = 'Liquidación' AND p.stock > 10;
```

### UPDATE con LIMIT

```sql
-- Actualizar solo los primeros N registros
UPDATE productos
SET destacado = TRUE
ORDER BY ventas DESC
LIMIT 10;
```

### CUIDADO con UPDATE

```sql
-- ❌ PELIGRO: Sin WHERE actualiza TODOS los registros
UPDATE clientes
SET ciudad = 'Madrid';  -- ¡Todos los clientes tendrán ciudad = 'Madrid'!

-- ✅ Siempre usa WHERE (a menos que quieras actualizar todo)
UPDATE clientes
SET ciudad = 'Madrid'
WHERE id = 1;

-- Tip: Usa SELECT primero para verificar
SELECT * FROM clientes WHERE id = 1;  -- Verifica que sea el correcto
UPDATE clientes SET ciudad = 'Madrid' WHERE id = 1;  -- Luego actualiza
```

---

## DELETE - Eliminar Datos

### DELETE Básico

```sql
-- Eliminar un registro
DELETE FROM clientes
WHERE id = 1;

-- Eliminar múltiples registros con condición
DELETE FROM productos
WHERE stock = 0;

-- Eliminar con múltiples condiciones
DELETE FROM pedidos
WHERE estado = 'Cancelado' AND fecha < '2024-01-01';
```

### DELETE con Subconsultas

```sql
-- Eliminar basado en otra tabla
DELETE FROM pedidos
WHERE cliente_id IN (
    SELECT id FROM clientes WHERE activo = FALSE
);

-- Eliminar duplicados (mantener el más reciente)
DELETE c1 FROM clientes c1
INNER JOIN clientes c2
WHERE c1.id < c2.id AND c1.email = c2.email;
```

### DELETE con JOIN

```sql
-- Eliminar usando datos de otra tabla
DELETE p
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
WHERE c.fecha_registro < '2020-01-01';
```

### DELETE con LIMIT

```sql
-- Eliminar solo los primeros N registros
DELETE FROM logs
ORDER BY fecha ASC
LIMIT 1000;
```

### DELETE vs TRUNCATE vs DROP

```sql
-- DELETE: Elimina filas específicas, se puede revertir, más lento
DELETE FROM clientes WHERE edad < 18;

-- TRUNCATE: Elimina todas las filas, muy rápido, resetea AUTO_INCREMENT
TRUNCATE TABLE clientes;

-- DROP: Elimina la tabla completa (estructura y datos)
DROP TABLE clientes;
```

### CUIDADO con DELETE

```sql
-- ❌ PELIGRO: Sin WHERE elimina TODOS los registros
DELETE FROM clientes;  -- ¡Elimina todos los clientes!

-- ✅ Siempre usa WHERE (a menos que quieras eliminar todo)
DELETE FROM clientes WHERE id = 1;

-- Tip de seguridad: Usa SELECT primero
SELECT * FROM clientes WHERE id = 1;  -- Verifica qué vas a eliminar
DELETE FROM clientes WHERE id = 1;     -- Luego elimina

-- Habilitar safe mode en MySQL Workbench
SET SQL_SAFE_UPDATES = 1;  -- Previene DELETE/UPDATE sin WHERE
```

---

## ORDER BY - Ordenar Resultados

### ORDER BY Básico

```sql
-- Orden ascendente (por defecto)
SELECT * FROM clientes
ORDER BY nombre;

SELECT * FROM clientes
ORDER BY nombre ASC;  -- Explícito

-- Orden descendente
SELECT * FROM productos
ORDER BY precio DESC;

-- Orden por múltiples columnas
SELECT * FROM clientes
ORDER BY ciudad ASC, nombre ASC;

-- Diferente orden para cada columna
SELECT * FROM productos
ORDER BY categoria ASC, precio DESC;
```

### ORDER BY con Expresiones

```sql
-- Ordenar por resultado de cálculo
SELECT nombre, precio, precio * 0.9 AS precio_descuento
FROM productos
ORDER BY precio_descuento DESC;

-- Ordenar por longitud de string
SELECT nombre FROM clientes
ORDER BY LENGTH(nombre) DESC;

-- Ordenar por función
SELECT nombre, LOWER(nombre) AS nombre_lower
FROM clientes
ORDER BY nombre_lower;
```

### ORDER BY con CASE

```sql
-- Orden personalizado
SELECT * FROM pedidos
ORDER BY CASE estado
    WHEN 'Urgente' THEN 1
    WHEN 'En Proceso' THEN 2
    WHEN 'Pendiente' THEN 3
    WHEN 'Completado' THEN 4
    ELSE 5
END;

-- Ordenar por categorías específicas primero
SELECT * FROM productos
ORDER BY CASE
    WHEN categoria = 'Destacados' THEN 1
    ELSE 2
END, precio DESC;
```

### ORDER BY con NULL

```sql
-- NULL al final (comportamiento por defecto en MySQL)
SELECT * FROM clientes
ORDER BY telefono;

-- NULL al principio
SELECT * FROM clientes
ORDER BY telefono IS NULL DESC, telefono;

-- NULL al final explícito
SELECT * FROM clientes
ORDER BY telefono IS NULL ASC, telefono;
```

### Ejemplos Prácticos

```sql
-- Top 10 productos más caros
SELECT nombre, precio
FROM productos
ORDER BY precio DESC
LIMIT 10;

-- Clientes ordenados por fecha de registro (más recientes primero)
SELECT nombre, fecha_registro
FROM clientes
ORDER BY fecha_registro DESC;

-- Productos ordenados por disponibilidad y luego por precio
SELECT nombre, stock, precio
FROM productos
ORDER BY 
    CASE WHEN stock > 0 THEN 0 ELSE 1 END,
    precio ASC;
```

---

## Funciones de Agregación

### COUNT - Contar Registros

```sql
-- Contar todos los registros
SELECT COUNT(*) FROM clientes;

-- Contar valores no nulos
SELECT COUNT(telefono) FROM clientes;

-- Contar valores únicos
SELECT COUNT(DISTINCT ciudad) FROM clientes;

-- Con alias
SELECT COUNT(*) AS total_clientes FROM clientes;

-- Con condición
SELECT COUNT(*) AS mayores_edad 
FROM clientes 
WHERE edad >= 18;
```

### SUM - Suma

```sql
-- Suma total
SELECT SUM(precio) FROM productos;

-- Suma con condición
SELECT SUM(cantidad) AS total_vendido
FROM ventas
WHERE fecha >= '2024-01-01';

-- Suma de cálculo
SELECT SUM(precio * cantidad) AS ingresos_totales
FROM ventas;
```

### AVG - Promedio

```sql
-- Promedio básico
SELECT AVG(precio) FROM productos;

-- Promedio con alias
SELECT AVG(edad) AS edad_promedio FROM clientes;

-- Promedio redondeado
SELECT ROUND(AVG(precio), 2) AS precio_promedio
FROM productos;

-- Promedio con condición
SELECT AVG(salario) AS salario_promedio
FROM empleados
WHERE departamento = 'Ventas';
```

### MAX y MIN - Máximo y Mínimo

```sql
-- Valor máximo
SELECT MAX(precio) FROM productos;

-- Valor mínimo
SELECT MIN(precio) FROM productos;

-- Múltiples agregaciones
SELECT 
    MAX(precio) AS precio_maximo,
    MIN(precio) AS precio_minimo,
    AVG(precio) AS precio_promedio
FROM productos;

-- Con fechas
SELECT 
    MIN(fecha_pedido) AS primer_pedido,
    MAX(fecha_pedido) AS ultimo_pedido
FROM pedidos;
```

### Ejemplos Combinados

```sql
-- Estadísticas completas de productos
SELECT 
    COUNT(*) AS total_productos,
    COUNT(DISTINCT categoria) AS total_categorias,
    SUM(stock) AS stock_total,
    AVG(precio) AS precio_promedio,
    MAX(precio) AS precio_maximo,
    MIN(precio) AS precio_minimo,
    SUM(precio * stock) AS valor_inventario
FROM productos;

-- Estadísticas por condición
SELECT 
    COUNT(*) AS total_clientes,
    COUNT(CASE WHEN activo = TRUE THEN 1 END) AS clientes_activos,
    COUNT(CASE WHEN activo = FALSE THEN 1 END) AS clientes_inactivos,
    AVG(edad) AS edad_promedio
FROM clientes;
```

---

## GROUP BY y HAVING

### GROUP BY Básico

```sql
-- Agrupar y contar
SELECT ciudad, COUNT(*) AS total
FROM clientes
GROUP BY ciudad;

-- Agrupar con suma
SELECT categoria, SUM(stock) AS stock_total
FROM productos
GROUP BY categoria;

-- Agrupar con promedio
SELECT departamento, AVG(salario) AS salario_promedio
FROM empleados
GROUP BY departamento;

-- Agrupar por múltiples columnas
SELECT ciudad, pais, COUNT(*) AS total
FROM clientes
GROUP BY ciudad, pais;
```

### GROUP BY con Funciones de Agregación

```sql
-- Ventas totales por producto
SELECT 
    producto_id,
    COUNT(*) AS total_ventas,
    SUM(cantidad) AS unidades_vendidas,
    SUM(precio * cantidad) AS ingresos_totales
FROM ventas
GROUP BY producto_id;

-- Estadísticas por categoría
SELECT 