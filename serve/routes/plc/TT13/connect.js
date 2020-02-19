const Express = require("express");
const Variables = require("./createTT13Struct");
const Router = Express.Router();
const Nodes7 = require("nodes7");
const Plc = new Nodes7();
const Process = require("./processTT13Data");

function readData(_plcConnection) {
  return new Promise((resolve, reject) => {
    let data;
    console.log(Process);
    // Initiate connection to plc then call conencted function
    Plc.initiateConnection(
      _plcConnection /*|| {
        port: 102,
        host: "10.136.16.31",
        rack: 0,
        slot: 3
      }*/,
      connected //callback function
    );

    async function connected(err) {
      // We have an error.  Maybe the PLC is not reachable.
      if (typeof err !== "undefined") {
        console.log(err);
        //process.exit();
      }

      // This sets the "translation" to allow us to work with object names
      Plc.setTranslationCB(tag => {
        return Variables[tag];
      });

      // Add items to the interal reading polling list.
      Plc.addItems(Object.keys(Variables));

      // Read items then return a values object.
      Plc.readAllItems(callback);

      //Callback function from readAllItems method.
      function callback(err, values) {
        if (err) {
          console.log("SOMETHING WENT WRONG READING VALUES!!!!");
          reject(err);
        }

        data = values;

        //const promisedData = processPlcData(data);
        const promisedData = Process(data);

        //Return the plcData object and resolve the promise.
        resolve(promisedData);
        //Drop the connection, to fix all the things.
        Plc.dropConnection();
      }
    }
  });
}

//make the CORS work, wrap the router in the middle man to catch errors.
const wrapper = middleware => {
  return async (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, PATCH, DELETE, GET"
      );
    }
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

Router.get(
  "/",
  wrapper(async (request, response) => {
    let plcConnection;
    
    if (request.query.conn) plcConnection = JSON.parse(request.query.conn); //convert json to javascript object

    readData(plcConnection)
      .then(data => {
        response.send(data);
      })
      .catch(err => {
        console.log("err = " + err);
      });
  })
);

module.exports = Router;