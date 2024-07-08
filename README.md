# Trabajo Práctico Final de Laboratorio 3

Este proyecto es una alternativa de resolución para el Trabajo Práctico Final de Laboratorio 3. En el mismo, se ha creado una maqueta de una página web para una inmobiliaria utilizando Bootstrap y una hoja de estilos personalizada para mejorar la responsividad y la apariencia general del sitio.

## Tecnologías Utilizadas

- **Bootstrap**: Se utilizó Bootstrap para asegurar que el sitio sea responsive y se adapte a diferentes dispositivos y tamaños de pantalla.
- **Hoja de Estilos Personalizada (style.css)**: Se creó una hoja de estilos personalizada para aplicar estilos específicos que complementan los proporcionados por Bootstrap.

## Funciones de Bootstrap Utilizadas

- **Grid System**: Se utilizó el sistema de rejilla de Bootstrap (.container, .row, .col-*) para crear una estructura de página responsive.
- **Utility Classes**: Se utilizaron clases de utilidad como .text-center, .text-white, .bg-dark, .py-5, .mb-4, entre otras, para aplicar estilos específicos sin necesidad de CSS adicional.
- **Navbars**: Se emplearon clases como .nav, .nav-item, .nav-link, y .justify-content-* para crear una barra de navegación responsive.
- **Cards**: Se usaron componentes de tarjeta (.card, .card-body, .card-title, .card-text, .card-img-top) para mostrar los anuncios de casas y departamentos.
- **Buttons**: Se utilizaron clases de botones de Bootstrap (.btn, .btn-warning, .btn-success) para estilizar los botones de la página.
- **Carousel**: Se utilizó el componente de carrusel de Bootstrap para mostrar los comentarios de los clientes de manera dinámica.
- **Popover**: Se usaron popovers de Bootstrap para mostrar información adicional sobre los precios de las propiedades.

## Estructura del Proyecto

- **index.html**: Archivo principal que contiene la estructura del contenido de la página.
- **/bootstrap**: Carpeta que contiene los archivos CSS y JS de Bootstrap.
- **/images**: Carpeta que contiene todas las imágenes utilizadas en la página.
- **/styles**: Carpeta que contiene la hoja de estilos personalizada (style.css).
- **/scripts**: Carpeta que contiene los archivos JavaScript (main.js, data.js).

## Semántica Utilizada en el HTML

Se ha utilizado una estructura HTML semántica para mejorar la accesibilidad y la claridad del código. A continuación, se detallan algunas de las etiquetas semánticas utilizadas:

- `<header>`: Define el encabezado de la página, que incluye el logo y el menú de navegación.
- `<nav>`: Contiene los enlaces de navegación.
- `<section>`: Agrupa contenido relacionado. Se utilizó para secciones específicas como "Más sobre nosotros" y "Encuentra la casa de tus sueños".
- `<main>`: Contiene el contenido principal de la página, incluyendo los anuncios de casas y departamentos.
- `<footer>`: Define el pie de página, que incluye enlaces adicionales y derechos reservados.
- `<template>`: Se utilizó para definir estructuras HTML que se repiten en el documento, como las tarjetas de propiedades, las entradas del blog y los comentarios.

## Mejoras Implementadas

- **Comentarios Dinámicos**: Se implementó un carrusel para mostrar los comentarios de los clientes de manera dinámica, mostrando dos comentarios a la vez.
- **Botón de WhatsApp**: Se añadió un botón de WhatsApp fijo en la esquina inferior derecha para facilitar el contacto con la inmobiliaria.
- **Sanitización de Popovers**: Se configuraron los popovers con `sanitize: false` para permitir contenido HTML personalizado.

## Cómo Instalar

1. **Clonar el repositorio**: `git clone <URL_DEL_REPOSITORIO>`
2. **Navegar al directorio del proyecto**: `cd <NOMBRE_DEL_PROYECTO>`
3. **Abrir el archivo `index.html` en un navegador**.

## Ejemplo de Código

**index.html**:

```html
<section class="text-white py-5" style="background-image: url(./images/encuentra.jpg); background-repeat: no-repeat; background-position: center center;">
    <div class="container text-center">
        <h2 class="display-4">Encuentra la casa de tus sueños</h2>
        <p class="lead">Llena el formulario de contacto y un asesor se pondrá en contacto a la brevedad</p>
        <a href="#" class="btn btn-warning mt-3">Contactanos</a>
    </div>
</section>
