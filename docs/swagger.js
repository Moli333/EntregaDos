const swagger = require('swagger-jsdoc');
/**
 * Configuración API /info
 */
const swaggerDefinition = {};

/**
 *opciones
 */

const options = {
  swaggerDefinition,
  apis: ['*./routes/*.js'],
};

const openApiConfiguration = swaggerJsdoc(options);
module.exports = openApiConfiguration;
