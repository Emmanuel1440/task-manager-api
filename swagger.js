// swagger.js
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Manager API',
      version: '1.0.0',
      description: 'Comprehensive API documentation for managing users and tasks in the Task Manager application.',
      contact: {
        name: 'Emmanuel Wanjala',
        email: 'emmanuelwanjala@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
        description: 'Local development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      schemas: {
        Task: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            title: {
              type: 'string',
              example: 'Finish project report',
            },
            description: {
              type: 'string',
              example: 'Write the final section of the project report',
            },
            completed: {
              type: 'boolean',
              example: false,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-15T10:00:00.000Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2025-05-15T12:00:00.000Z',
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              example: 1,
            },
            username: {
              type: 'string',
              example: 'emmanuel',
            },
            email: {
              type: 'string',
              example: 'emmanuel@example.com',
            },
            password: {
              type: 'string',
              example: 'password123',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [
      {
        name: 'Auth',
        description: 'Endpoints related to user registration and login',
      },
      {
        name: 'Tasks',
        description: 'Endpoints for creating, retrieving, updating, and deleting tasks',
      },
    ],
  },
  apis: ['./routes/*.js'], // Looks through all route files for Swagger comments
};

const specs = swaggerJsDoc(options);

module.exports = { swaggerUi, specs };
