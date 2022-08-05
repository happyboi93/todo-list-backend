const passport = require('passport')
const GoogleStrategy = require( 'passport-google-oauth20' ).Strategy;

GOOGLE_CLIENT_ID = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
GOOGLE_CLIENT_SECRET = 'XXXXXXXXXXXXXXXXXXXXXXXX';

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user,done){
  return done(null,user);
})
passport.deserializeUser(function(user,done){
  return done(null,user);
})
