// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuración básica de Swagger (OpenAPI)
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mi API con Swagger",
      version: "1.0.0",
      description: "Esta es una API de ejemplo documentada con Swagger (OpenAPI)",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
  },
  // Le indicamos dónde buscar los comentarios con definiciones de rutas
  apis: ["./routes/*.js"], 
};

// Generamos la especificación a partir de swaggerOptions
const swaggerSpecs = swaggerJsdoc(swaggerOptions);

// Exportamos para usar en app.js
module.exports = {
  swaggerUi,
  swaggerSpecs,
};

