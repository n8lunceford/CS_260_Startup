const express = require('express');
const app = express();
// let users = {};
// const uuid = require('uuid');
app.use(express.json());
const DB = require('./database.js');




// Added code in this block
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const authCookieName = 'token';
app.use(express.json());
app.use(cookieParser());
app.set('trust proxy', true);

// Added code in this block
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }




var apiRouter = express.Router();
app.use('/api', apiRouter);
app.use(express.static('public'));

const port = process.argv.length > 2 ? process.argv[2] : 4002;


app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await DB.getUser(req.body.email)) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = await DB.createUser(req.body.email, req.body.password);
  
      // Set the cookie
      setAuthCookie(res, user.token);
  
      res.send({
        id: user._id,
      });
    }
  });
// apiRouter.post('/auth/create', async (req, res) => {
//     const user = users[req.body.email];
//     if (user) {
//       res.status(409).send({ msg: 'Existing user' });
//     } else {
//       const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
//       users[user.email] = user;
//         DB.createUser(email, password);
//       res.send({ token: user.token });
//     }
//   });
  
  // GetAuth login an existing user
  apiRouter.post('/auth/login', async (req, res) => {
    const user = await DB.getUser(req.body.email);
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        setAuthCookie(res, user.token);
        res.send({ id: user._id });
        return;
      }
    }
    res.status(401).send({ msg: 'Unauthorized' });
  });
//   apiRouter.post('/auth/login', async (req, res) => {
//     const user = users[req.body.email];
//     if (user) {
//       if (req.body.password === user.password) {
//         user.token = uuid.v4();
//         res.send({ token: user.token });
//         return;
//       }
//     }
//     res.status(401).send({ msg: 'Unauthorized' });
//   });
  
  // DeleteAuth logout a user
  apiRouter.delete('/auth/logout', (_req, res) => {
    res.clearCookie(authCookieName);
    res.status(204).end();
  });
//   apiRouter.delete('/auth/logout', (req, res) => {
//     const user = Object.values(users).find((u) => u.token === req.body.token);
//     if (user) {
//       delete user.token;
//     }
//     res.status(204).end();
//   });
