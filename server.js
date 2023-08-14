const Twilio = require('twilio');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const client = Twilio('ACda998d40424002c207a695612e8e2c42', '35590d434d4bb50cf931701662bcfb89');
// const { channels, updateChannels } = useApp();

const AccessToken = Twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

//app.use(bodyParser.json());

app.get('/', (req, res) => {
  // console.log(req.body);
  res.send("ok");
});

app.get('/token/:identity', (req, res) => {
  // console.log(req.params);
  // console.log("........here......");
  const identity = req.params.identity;
  console.log("identity", identity);
  const token = new AccessToken(
    'ACda998d40424002c207a695612e8e2c42',
    'SK5fd32b48c603c4d7d78dab1100ddb440',
    'mGYazBErl91exQ0qWKpyPdCK8RH8lPDv',
    { identity: identity }
  );

  token.addGrant(
    new ChatGrant({
      serviceSid: 'IS8a345a392acb4a3a93988935e864db01',
    }),
  );

  res.send({
    identity: token.identity,
    jwt: token.toJwt(),
  });
});

// //gives channel sid for particular friendlyName 
// client.conversations.v1.conversations
//   .create({ friendlyName: 'Nirala' })
//   .then(conversation => console.log(conversation));

// //All channel sid 
// client.conversations.v1.conversations
//   .list({ limit: 50 })
//   .then(conversations => conversations.forEach(c =>  
//     console.log(c.sid)));

// client.conversations.v1.conversations('CH236eddaad42d4d4b9a28d2a583bb5752')
//   .participants
//   .create({ identity: 'Hii' })
//   .then(participant => {
//     console.log("participant.sid", participant.sid);
//   });


app.listen(3001, function () {
  console.log('Programmable Chat server running on port 3001!');
});