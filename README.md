<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Reportes en Pdf con NestJS / Node

Domina la creación de reportes en PDF utilizando NestJS, el potente framework de Node.js. En este curso, aprenderás a integrar y utilizar herramientas como Pdfmake para generar reportes profesionales y personalizados.

## Características principales alcanzadas 📋
- PdfMake
- NestJS
- Configuración de fuentes (Como Roboto)
- Diseños de reportes personalizados
- Diseños y temas para tablas
- Re-uitlilzación de estilos y secciones
- Gráficos con Chart.js
- Tomar HTML y generar reportes
- Códigos QR
- Conexión a base de datos con Prisma
- PostgreSQL para extracción de data
- Docker
- PgAdmin
- Uso de SVGs e imágenes
- Diseño de columnas y filas

### Módulos incluidos:
Autenticación (con manejo de tokens)
Gestión de pedidos
Productos y categorías
Relacionamientos en PostgreSQL y compatibilidad con MongoDB

### Tecnologías utilizadas 🛠️
 - NestJS: Framework para construir aplicaciones de servidor escalables
 - Passport: Middleware de autenticación para Node.js
 - JWT (JSON Web Tokens): Gestión de autenticación basada en tokens
 - TypeORM: ORM para manejar relaciones en PostgreSQL
 - MongoDB: Base de datos alternativa para flexibilidad
 - Swagger: Documentación de la API


## Instalación y configuración 🔧

Clonar el repositorio

```bash
      git clone https://github.com/MatiasNZamora/Talampaya-backend.git
      cd Talampaya-backend
```

### Instalar dependencias

```bash
    npm install
    Configurar variables de entorno del archivo .env.template
```

### Levantar contenedor de Docker:

```bash
    docker-compose up -d
```

### Ejecutar migraciones (Para PostgreSQL)

```bash
      En el caso de PostgresQl
      npm run typeorm migration:run
      Levantar el servidor
```

### Ejecutar el comando para levantar el projecto en modo Desarrollo:

```bash
    npm run start:dev
```

### Endpoints disponibles 📚

``` La coleccion de enpoints estan disponibles en el repositorio.    ```


Constancia laboral con conexión  (con conexión a base de datos)

Listado de países en formato de tabla (con conexión a base de datos)

Recibo de compra con código QR - Maestro - detalle

Múltiples relaciones e inner joins (con conexión a base de datos)

Reporte con estadísticas y gráficas (con conexión a base de datos parcialmente)

Reporte para transformar HTML complejo a Pdf

Clonar la idea de un reporte existente a PdfMake

Reporte con tamaño personalizado
