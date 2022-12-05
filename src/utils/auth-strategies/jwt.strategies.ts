import { ExtractJwt, Strategy } from "passport-jwt";

const JWT = process.env['JWT_SECRET'] || '';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT,
}

export const JwtStrategy = new Strategy(options, (payload, done) =>{
  return done(null, payload);
});
