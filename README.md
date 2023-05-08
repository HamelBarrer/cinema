# Aplicacion de control de peliculas

Esta es la documentacion de la aplicacion de peliculas, para la creacion de usuario, peliculas y categorias de las peliculas.

## Iniciacion de proyecto

Para poder ejecutar el proyecto es necesario instalar las dependencias realizandolo de la siguiente forma:

```sh
# Se utiliza pnpm para instalar las dependencias
pnpm i
```
## Acceder a los end points:

Para poder realizar inserciones a la base de datos es requerido interactuar con los siguientes end point:

- Usuario:
    - http://localhost:3000/api/v1/users/ (Creacion de usuario - POST)
    - http://localhost:3000/api/v1/users/:userId (Obtener el usuario y las peliculas que ha visto - GET)
- Categoria de las peliculas:
    - http://localhost:3000/api/v1/movie_categories (Obtener todas las categorias - GET)
    - http://localhost:3000/api/v1/movie_categories (Crear una nueva categoria - POST)
- Peliculas:
    - http://localhost:3000/api/v1/movies (Obtener todas las peliculas - GET)
    - http://localhost:3000/api/v1/movies/novelty_movies (Obtener las peliculas que son una novedad - GET)
    - http://localhost:3000/api/v1/movies (Crear una nueva pelicula - POST)
    - http://localhost:3000/api/v1/movies/:movieId (Marcar como vista una pelicula - POST)