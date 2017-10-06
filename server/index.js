require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')

const app = express();

app.use(bodyParser.json());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db=>{
  console.log('database connected');
  app.set('db', db);
}).catch(err=>console.log(err));

passport.use(new Auth0Strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
}, function(accessToken, refreshToken, extraParams, profile, done){
  const db = app.get('db');

  db.find_robot([profile.identities[0].user_id])
    .then(robot =>{
      if(robot[0]){
        return done(null, robot[0].id)
      }else{
        const robot = profile._json;
        db.create_robot([
          robot.identities[0].user_id
        ]).then(robot => {
          return done(null,robot[0].id);
        });
      }
    });
}));

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0',{
  successRedirect: 'http://localhost:3000/#/dashboard',
  failureRedirect: '/auth'
}));

app.get('/auth/me', (req,res)=>{
  if(!req.robot){
    return res.status(404).send('user not found.')
  }else{
    return res.status(200).send(req.robot)
  }
})

app.get('/auth/logout', (req, res)=>{
  req.logOut();
  req.redirect(303, 'http://localhost:3000');
});

passport.serializeUser((id,done)=>{
  done(null, id);
})

passport.deserializeUser((id,done)=>{
  app.get('db').find_current_robot([id])
    .then(user=>{
      return done(null, user[0]);
    })
})

//app.put('/profile')

const PORT = 3005;
app.listen(PORT, ()=> console.log(`Serving ${PORT.toLocaleString()} leagues under the sea...`));
