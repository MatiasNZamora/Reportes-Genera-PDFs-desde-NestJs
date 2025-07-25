<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# 📄 Generación de Reportes PDF con NestJS / Node.js

Este repositorio contiene un proyecto de ejemplo profesional que demuestra cómo generar **reportes PDF personalizados** utilizando **NestJS** y herramientas modernas como **PdfMake**, **Chart.js**, **QR Codes**, y más.
Diseñado para automatizar la creación de documentos como constancias, reportes tabulados, recibos, y estadísticas visuales, con conexión real a bases de datos PostgreSQL.

## 🚀 Funcionalidades destacadas

- 🧾 Generación de constancias laborales
- 🌍 Reportes tabulares (ej: listado de países)
- 🛒 Recibos de compra con códigos QR (maestro-detalle)
- 🔗 Consultas con múltiples relaciones (INNER JOINs)
- 📊 Reportes con gráficas dinámicas
- 🧱 Generación de PDF desde HTML enriquecido
- 🎨 Clonación visual de reportes existentes en PdfMake
- 📐 Reportes con tamaño de hoja personalizado

## 🛠️ Tecnologías utilizadas

| Herramienta | Uso |
|-------------|-----|
| **NestJS** | Framework backend modular y escalable |
| **PdfMake** | Generación de PDFs dinámicos y personalizables |
| **Chart.js** | Creación de gráficas para reportes |
| **QRCode** | Códigos QR en documentos |
| **Prisma ORM** | Acceso y modelado de datos con PostgreSQL |
| **Docker** | Contenedores para el entorno de desarrollo |
| **PgAdmin** | Cliente visual para PostgreSQL |
| **SVG / Imágenes** | Inclusión de recursos visuales |
| **Roboto Font** | Tipografía profesional incorporada |

## 📄 Reportes disponibles

| Reporte                     | Descripción                                 |
| --------------------------- | ------------------------------------------- |
| **Constancia Laboral**      | Datos reales desde PostgreSQL               |
| **Listado de Países**       | Tabla con formato personalizado             |
| **Recibo de Compra con QR** | Maestro-detalle + código QR                 |
| **Relaciones múltiples**    | INNER JOINs e información compuesta         |
| **Gráficas**                | Reportes con estadísticas y visualizaciones |
| **HTML a PDF**              | Conversión de HTML enriquecido a documento  |
| **Diseños personalizados**  | Réplica de reportes existentes              |
| **Tamaños específicos**     | Personalización del tamaño de hoja          |


## Instalación y configuración 🔧

Clonar el repositorio

```bash
      git clone https://github.com/MatiasNZamora/Reportes-PDFs-NestJs
      cd Reportes-PDFs-NestJs
```

#### Instalar dependencias :pencil2:

```bash
    npm install
    Configurar variables de entorno del archivo .env.template
```

#### Levantar contenedor de Docker :pencil2:

```bash
    docker-compose up -d
```

#### Ejecutar migraciones de Prisma (Para PostgreSQL) :pencil2:

```bash
      npm npx prisma generate
```

#### Ejecutar el comando para levantar el projecto en modo Desarrollo :pencil2:

```bash
    npm run start:dev
```

### Endpoints disponibles 📚

``` La coleccion de enpoints estan disponibles en el repositorio. ```


## 📬 Contacto

**Matías N. Zamora**  
Desarrollador Fullstack & Asesor Técnico

- 🌐 GitHub: [github.com/MatiasNZamora](https://github.com/MatiasNZamora)
- 📧 Porfolio: [https://matiasnzamora.com.ar](https://www.matiasnzamora.com.ar/)
- 🖥️ LinkedIn: [linkedin.com/in/matiasnzamora](https://linkedin.com/in/matiasnzamora)
