import passport from "passport";
import { JwtStrategy } from "./jwt.strategies";

passport.use( JwtStrategy );
