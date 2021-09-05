module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '00ec7b11c68daaa2da9682049d41e245'),
    },
  },
});
