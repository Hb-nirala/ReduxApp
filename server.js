const { TwilioChat } = require("./src/utils/globalConstant");

const Twilio = require('twilio');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

//app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.get('/token/:identity', (req, res) => {
  console.log(req.params);
  console.log("........here......");
  const identity = req.params.identity;
  const token = new AccessToken(
    'ACda998d40424002c207a695612e8e2c42',
    'SK5fd32b48c603c4d7d78dab1100ddb440',
    'mGYazBErl91exQ0qWKpyPdCK8RH8lPDv',
    { identity: identity }
  );

  //token.identity = identity;
  token.addGrant(
    new ChatGrant({
      serviceSid: 'IS8a345a392acb4a3a93988935e864db01',
    }),
  );
  console.log("token.identity", token.identity);
  console.log("jwt: token.toJwt()", token.toJwt());
  res.send({
    identity: token.identity,
    jwt: token.toJwt(),
  });
});

app.listen(3001, function () {
  console.log('Programmable Chat server running on port 3001!');
});