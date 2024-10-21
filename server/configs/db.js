import {MongoClient, ServerApiVersion} from "mongodb";
const {MONGODB_URI, MONGODB_DATABASE} = process.env;

const client = new MongoClient (MONGODB_URI, {
    serverApi: {
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    },
});

try {
    //connect the client to the server
    await client.connect();
    //send a ping to confirm a succesful connection
    await client.db().command({ping:1});
    console.log("Connected to MongoDB!");
}   catch (err) {
    console.error(err);
}

export const db = client.db(MONGODB_DATABASE);