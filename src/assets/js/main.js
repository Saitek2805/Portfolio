// Import our custom CSS
import '../../scss/styles.scss'


// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


/**
* Configura el cambio de tema entre claro y oscuro al hacer clic en un botón.
* Se ejecuta cuando el contenido del documento ha sido completamente cargado.
*
* @event DOMContentLoaded
*/
document.addEventListener('DOMContentLoaded', () => {
   /**
    * Botón de alternancia de tema.
    * @type {HTMLElement}
    */
   const themeToggleBtn = document.getElementById('themeToggle');


   /**
    * Icono del botón de alternancia de tema.
    * @type {HTMLElement}
    */
   const themeIcon = document.getElementById('themeIcon');


   /**
    * Evento que alterna el tema entre claro y oscuro.
    *
    * @event click
    */
   themeToggleBtn.addEventListener('click', () => {
       /**
        * Tema actual del documento. Por defecto, se asume que es 'light' si no se ha establecido.
        * @type {string}
        */
       const currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'light';
      
       /**
        * Nuevo tema a establecer, dependiendo del tema actual.
        * @type {string}
        */
       const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
       // Establece el nuevo tema en el atributo data-bs-theme del elemento <html>
       document.documentElement.setAttribute('data-bs-theme', newTheme);
      
       // Cambiar el icono según el nuevo tema
       if (newTheme === 'dark') {
           themeIcon.classList.remove('bi-sun');
           themeIcon.classList.add('bi-moon');
       } else {
           themeIcon.classList.remove('bi-moon');
           themeIcon.classList.add('bi-sun');
       }
   });
});
