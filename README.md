                                                                              Pokedex
                                                                              
La PokeDex en Pokemon se hace por medio de consumir una API, la cual nos permite visualizar el nombre, imagen, habilidades, poderes especiales y demas contenido de cada Pokemon. La PokeApi, esta funcion es que los componentes generados al inicio del proyecto y el TS de cada componente se encarga de llamar los datos requeridos desde la PokeAPI. 

Se crean componentes de 
- "Header"
- "Nav" 
- "Pokemon-list"

Servicio
- DataService.ts

![image](https://user-images.githubusercontent.com/112819143/206833204-c8b6d3f3-314f-4b6d-af95-107332eb4d4c.png)
 
                                                                         Descripción del servicio
                                                                         
 Se crea un metodo privado y se usa unn servicio data.service.ts en el cual se consumira la API en el cual llamaremos por medio del GET, y se coloca el link HTTP para llamar  a los Pokemones y su carta de pokemones. En el App.module.ts se importan funcionalidades de Angular y se llaman para que se puedan usar en el proyecto.
 
 En el app component llamamos los componentes que vamos a usar para que se conecten en el proyecto. 
 Para el buscador usamos es una biblioteca de multiplataforma de bootstrap en la que lo usamos para eol nav, importando lo datos del menu y lo cual se aplicara a un  boton el cual desplegara el menu hamburguesa.
 
 En la carpeta Assets creamos la carpeta img para poder llamar las imagenes que tenemos guardadas.
 
                                                                            Shared y sus componentes
                                                     
 Nav : Contiene la parte superior de la app el titulo de pokemon el menù hamburguesa, y el buscador. Se conecta con Sass para dar estilos a la página.
 Nav.component.ts : Datos de lo que contendra los menú.
 Pokemon-List: Visualización de la lista de los pokemones.
  Nav.component.ts : Contenido de las variables que se mostraran en la tarjeta de pokemones.

                                                                            ¿Qué es una API REST?
                                                                            
Una API de REST, o API de RESTful, es una interfaz de programación de aplicaciones (API o API web) que se ajusta a los límites de la arquitectura REST y permite la interacción con los servicios web de RESTful. El informático Roy Fielding es el creador de la transferencia de estado representacional (REST).
Las API REST proporcionan una forma flexible y ligera de integrar aplicaciones y han surgido como el método más común para conectar componentes en la arquitectura de microservicios.

REST, definido por primera vez en el año 2000 por el científico de la computación Dr. Roy Fielding en su tesis doctoral, proporciona un nivel relativamente alto de flexibilidad y libertad para los desarrolladores. Dicha flexibilidad es solo una razón por la que las API REST han surgido como un método común para conectar componentes y aplicaciones en una arquitectura de microservicios.

Si bien la API de REST debe cumplir todos estos parámetros, resulta más fácil de usar que un protocolo definido previamente, como SOAP (protocolo simple de acceso a objetos), el cual tiene requisitos específicos, como la mensajería XML y la seguridad y el cumplimiento integrados de las operaciones, que lo hacen más lento y pesado. 
                                                                                    
                                                                                    Fetch / Axios

Arranquemos definiendo la api fetch. Esta es un metodo del objeto en javascript llamado window, o sea que para utilizarlo no necesitamos instalar nada extra. Simplemente hacemos el llamado escribiendo fetch(url) y esto nos devuelve una promise con la respuesta. En el caso de hacer una petición http GET, el único parámetro obligatorio que recibe fetch es la URL.

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

