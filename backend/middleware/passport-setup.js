const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const config = require('config');
const User = require('../model/User');
const secretOrKey = config.get('secretOrkey');
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
};

passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const { id } = jwt_payload;
    try {
      const user = await User.findById(id).select('-password');
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.error(error);
    }
  })
);
module.exports = isAuth = () =>
  passport.authenticate('jwt', { session: false });