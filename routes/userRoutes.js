// routes/userRoutes.js
const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: 
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Juan"
 */
router.get("/users", (req, res) => {
  // Aquí podríamos hacer la lógica para obtener usuarios de una BD
  res.status(200).json([
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "María" },
  ]);
});

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Crear un usuario nuevo
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Pedro"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error al crear el usuario
 */
router.post("/users", (req, res) => {
  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ error: "Nombre es requerido" });
  }
  // Lógica para guardar el usuario en la BD...
  res.status(201).json({ message: `Usuario ${nombre} creado`, nombre });
});

module.exports = router;

