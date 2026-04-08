var express = require('express');
var path = require('path');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

/* 🔴 CHANGE 1: add /user-account in URL */
var mongoUrl = "mongodb://admin:password@localhost:27017/user-account?authSource=admin";


app.get('/get-profile', async function (req, res) {   // 🔴 CHANGE 2: add async

    /* 🔴 CHANGE 3: use new MongoClient */
    const client = new MongoClient(mongoUrl);

    await client.connect();   // 🔴 CHANGE 4: connect using await

    var db = client.db('user-account');
    var query = { userid: 1 };

    const result = await db.collection('users').findOne(query);   // 🔴 CHANGE 5: await

    await client.close();   // 🔴 CHANGE 6: await close

    res.send(result || {});
});


app.post('/update-profile', async function (req, res){   // 🔴 CHANGE 7: add async

    var userObj = req.body;

    console.log('Connecting to the db.....');

    /* 🔴 CHANGE 8: use new MongoClient */
    const client = new MongoClient(mongoUrl);

    await client.connect();   // 🔴 CHANGE 9

    var db = client.db('user-account');

    userObj['userid']= 1;

    var query = { userid: 1};
    var newValues = { $set: userObj };

    console.log('successfully connected to the user-account db');

    await db.collection('users').updateOne(query, newValues, {upsert: true});   // 🔴 CHANGE 10

    console.log('successfully updated or inserted');

    await client.close();   // 🔴 CHANGE 11

    res.send(userObj);
});


app.get('/test.jpg', function (req, res){
    var img = fs.readFileSync('test.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(img, 'binary');
});


app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
