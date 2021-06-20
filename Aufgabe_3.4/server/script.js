"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_4 = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_4;
(function (P_3_4) {
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Starting server" + _port); //create server
        server.addListener("request", handleRequest); //Listener for Requests and Listen functions
        server.listen(_port);
    }
    let databaseURL = "mongodb+srv://dbUser:password123test@gis-opfer-selbsthilfegr.cqei1.mongodb.net/LetzteAbgabe?retryWrites=true&w=majority";
    async function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            let input = { name: url.query.name + " ", mail: url.query.email + " ", subject: url.query.subject + " " };
            if (path == "/sendData") {
                let data = await sendDatabaseData(databaseURL, input);
                _response.write(data);
            }
            else if (path == "/getData") {
                let data = await getDatabaseData(databaseURL);
                _response.write(JSON.stringify(data));
                console.log(data);
            }
        }
        _response.end();
    }
    async function getDatabaseData(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders = mongoClient.db("LetzteAbgabe").collection("Daten");
        console.log("Database connection", orders != undefined);
        let cursor = orders.find();
        let data = await cursor.toArray();
        return data;
    }
    async function sendDatabaseData(_url, _formData) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders = mongoClient.db("LetzteAbgabe").collection("Daten");
        orders.insertOne(_formData);
        let answer = "ThisIsAnAnswer";
        return answer;
    }
})(P_3_4 = exports.P_3_4 || (exports.P_3_4 = {}));
//# sourceMappingURL=script.js.map