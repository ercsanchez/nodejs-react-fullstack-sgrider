const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // console.log(req.body);

    // no need for this, since using requireLogin middleware to screen requests based on auth status
    // if (!req.user) {
    //   return res.status(401).send({ error: 'You must log in!' });
    // }

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id,
    });
    // console.log(charge);
    req.user.credits += 5;
    const user = await req.user.save(); // by convention, always use the user instance returned after accessing db to be sure it is updated
    res.send(user);
  });
};
