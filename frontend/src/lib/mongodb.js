const { MongoClient, ServerApiVersion } = require("mongodb");

console.log(process.env.MONGODB_URI, "MONGODB_URI");
if (!process.env.MONGODB_URI) {
  //   console.log("first");
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
// console.log("second");
const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client = new MongoClient(uri, options);

if (process.env.NODE_ENV === "development") {
  // console.log("third")
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClient) {
    global._mongoClient = client;
  }
  client = global._mongoClient;
} else {
  // In production mode, it's best to not use a global variable.
  client = client;
}

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
module.exports = client;
