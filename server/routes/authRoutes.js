const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); // removes authenticated user from the cookie
    // res.send(req.user); // will show an empty screen since no user attached to cookie
    res.redirect('/');
  });

  // api route to view currently authenticated user
  app.get('/api/current_user', (req, res) => {
    // res.send(req.session); // view cookie that contains session data
    res.send(req.user); // passport attaches user model instance to the request obj
  });
};
