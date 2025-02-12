# Node.js API con Swagger/OpenAPI

¡Bienvenido/a! Este proyecto demuestra cómo **integrar Swagger (OpenAPI)** en un servidor **Node.js** utilizando Express.  
> **Nota:** Este proyecto se ha creado con fines **educativos** y para servir de guía paso a paso.

---

## Tabla de contenido
1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Requisitos](#requisitos)
3. [Instalación](#instalación)
4. [Ejecución](#ejecución)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Uso de la documentación Swagger](#uso-de-la-documentación-swagger)
7. [Contribución](#contribución)
8. [Licencia](#licencia)

---

## Descripción del proyecto

Este repositorio muestra cómo:
- Configurar una **API básica** en Node.js con **Express**.
- Añadir **documentación automática** mediante **Swagger/OpenAPI**.
- Visualizar la documentación en un interfaz interactivo (Swagger UI).

El proyecto incluye ejemplos mínimos de endpoints, comentarios JSDoc y un archivo de configuración para que puedas ver de manera práctica cómo se genera la documentación.

---

## Requisitos
- **Node.js** (versión 14 o superior recomendada).
- **NPM** (viene con Node.js).

Opcionalmente, puedes usar **Yarn** u otro gestor de paquetes si lo prefieres, realizando ajustes mínimos en los comandos.

---

## Instalación

1. **Clonar** este repositorio (o descargar el ZIP):
   ```bash
   git clone https://github.com/rpiealb297/swagger-demo.git
   cd mi-api-swagger
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

Esto instalará:
- **express** para el servidor,
- **swagger-jsdoc** y **swagger-ui-express** para generar y servir la documentación,
- Y otras dependencias listadas en `package.json`.

---

## Ejecución

Para **iniciar** el servidor local en modo de desarrollo:
```bash
npm start
```
o bien
```bash
node app.js
```

> Se abrirá un servidor en `http://localhost:3000` (por defecto).  
> También verás un mensaje en la consola con la ruta donde se despliega la documentación: `http://localhost:3000/api-docs`.

---

## Estructura del proyecto

```plaintext
mi-api-swagger/
 ┣ 📄 package.json        # Configuración de npm y dependencias
 ┣ 📄 app.js             # Archivo principal de la aplicación (Express)
 ┣ 📄 swagger.js         # Configuración de Swagger/OpenAPI
 ┣ 📂 routes
 ┃ ┗ 📄 userRoutes.js    # Ejemplo de rutas (GET, POST) con anotaciones JSDoc
 ┗ 📄 README.md          # Este archivo de documentación
```

- **app.js**: Inicia el servidor, configura el endpoint `/api-docs` para Swagger UI y carga nuestras rutas desde `routes/`.  
- **swagger.js**: Contiene la configuración de `swagger-jsdoc`: la versión de OpenAPI, metadatos de la API (titulo, descripción) y la ubicación de los archivos donde se buscan las anotaciones.  
- **routes/userRoutes.js**: Ejemplo de endpoints “/users” con anotaciones en formato JSDoc para que Swagger pueda extraer la documentación.

---

## Uso de la documentación Swagger

1. Arranca el servidor (ver sección [Ejecución](#ejecución)).
2. Abre tu navegador en `http://localhost:3000/api-docs`.
3. Verás la **interfaz de Swagger UI**, con la lista de endpoints disponibles.  
4. Haz clic en cualquier endpoint para ver detalles (parámetros, cuerpos de petición, respuestas, etc.) y **probarlos** directamente desde Swagger UI.

![Swagger UI Example](https://raw.githubusercontent.com/swagger-api/swagger-ui/master/docs/swagger.png)
> **Nota:** La imagen es ilustrativa; tu interfaz mostrará los endpoints que hayas definido, p.ej. `/users`.

---

## Contribución

1. **Haz un fork** del repositorio.
2. Crea una nueva rama con tu funcionalidad: `git checkout -b feature/nueva-funcionalidad`.
3. **Haz commits** con tus cambios y empuja tu rama (`git push origin feature/nueva-funcionalidad`).
4. Crea un **Pull Request** para que podamos revisar y fusionar tus contribuciones.

Se agradecen mejoras, correcciones y sugerencias para profundizar este proyecto educativo.

---

## Licencia

Este proyecto está bajo la **Licencia MIT**, lo que significa que eres libre de usarlo, modificarlo y distribuirlo con fines personales o comerciales, siempre y cuando mantengas los avisos de licencia.

---

**¡Gracias por usar este proyecto!**  
Si te ha resultado útil, no olvides darle una estrella en GitHub o compartirlo con tus compañeros/as de estudio.
