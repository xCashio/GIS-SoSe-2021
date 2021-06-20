import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_2Server {
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log("Starting server" + _port);    //create server
        server.addListener("request", handleRequest);       //Listener for Requests and Listen functions
        server.listen(_port);
    }
    let databaseURL: string = "mongodb+srv://dbUser:password123test@gis-opfer-selbsthilfegr.cqei1.mongodb.net/LetzteAbgabe?retryWrites=true&w=majority";

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {      //function Request granting access for everyone and giving back the sent message url
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let path: string = <string>url.pathname;
            let input: Data = {name: url.query.name + "", mail: url.query.mail + "", subject: url.query.subject + ""};
            if (path == "/sendData") {
                let data: string = await sendDatabaseData(databaseURL, input);
                _response.write(data);
            }
            else if (path == "/getData") {
               let data: Data[] = await getDatabaseData(databaseURL);
               _response.write(JSON.stringify(data));
            }
        }
        _response.end();
    }
    interface Data {
        name: string;
        mail: string;
        subject: string;
    }
    async function getDatabaseData(_url: string): Promise<Data[]> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("LetzteAbgabe").collection("Daten");
        console.log("Database connection", orders != undefined);
        let cursor: Mongo.Cursor = orders.find();
        let data: Data[] = await  cursor.toArray();
        return data;
    }
    async function sendDatabaseData(_url: string, _formData: Data): Promise<string> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let orders: Mongo.Collection = mongoClient.db("LetzteAbgabe").collection("Daten");
        orders.insertOne(_formData);
        let answer: string = "ThisIsAnAnswer";
        return answer;
    }


}