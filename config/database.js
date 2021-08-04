module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('PG_HOST', 'localhost'),
        port: env('PG_PORT', 5432),
        database: env('PG_DATABASE', 'strapi'),
        username: env('PG_USERNAME', 'strapi'),
        password: env('PG_PASSWORD', 'strapi'),
        schema: env('PG_SCHEMA', 'public'), // Not Required
        ssl:env('PG_SSL', false),
      },
      options: {},


    },
  },
});
