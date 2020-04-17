const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
import Models from '../models';

const { User } = Models;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;


module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, async(jwt_payload, done) => {
      const data = await User.findByPk(jwt_payload.id, {
        attributes: ['id', 'username'],
      })
      const Value = data.toJSON()
      console.log('ddd', Value)
      if (Value) {
        return done(null, data);
      }
        return done(null, false);
      })
  );
};
