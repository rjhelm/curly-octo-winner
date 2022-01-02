module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '79ceabc10b9bf1b6e8d6ef7be21a9437'),
  },
});
