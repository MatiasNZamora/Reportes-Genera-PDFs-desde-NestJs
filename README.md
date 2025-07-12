<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### Ejecutar en Dev

1. Clonar repositorio
2. Instalar dependencias ```npm install```
3. Clonar y cargar variables de entorno.
4. Levantar base de datos ```docker-compose up -d```
5. Generate prisma client ```npx prisma generate```
6. Ejecutar proyecto ```npm run start:dev```