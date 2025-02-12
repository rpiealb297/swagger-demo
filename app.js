// app.js
const express = require("express");
const app = express();

// Para parsear JSON en el cuerpo de las peticiones
app.use(express.json());

// Importamos Swagger
const { swaggerUi, swaggerSpecs } = require("./swagger");

// Configuramos el endpoint de la documentación
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Importamos y usamos las rutas definidas
const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

// Iniciamos el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación de la API en http://localhost:${PORT}/api-docs`);
});

