*** Ejecucion ***

1. los servicios ya contienen la informacion necesaria para su Ejecucion
2. para abrir la consola de ejecucion de cypress, en la terminal ingresar el comando "npx cypress open"
3. Seleccionar la ventana o recuadro "E2E Testing"
4. Seleccionar Start E2E Testing in Chrome, cypress lo sugiere por defecto pero puede ser cualquiera
5. En la ventana de "Specs" hacer clic en crud_user para ejecutar los casos de prueba.
6. El detalle de la ejecucion se podra ver si se hace clic sobre el nombre del caso de prueba y sobre cada item de aserciones
7. Se debe de tener presente que los casos de prueba son consecutivos y se puede presentar el caso que al registrar un usuario
   al intentar ejecutar la consulta falle porque el servicio toma tiempo para retener y tener disponible la informacion del usuario
   (solo se presentaria en el consultar).
      - Se ajusta el tiempo de espera con un Wait de 15000 despues de la ejecucion del metodo registrar para dar tiempo al servicio de tener disponible la informacion del usuario
