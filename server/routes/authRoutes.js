const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  // api route to view currently authenticated user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user); // passport attaches user model instance to the request obj
  });
};
