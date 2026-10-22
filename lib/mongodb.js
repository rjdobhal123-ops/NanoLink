import { MongoClient } from "mongodb";

const uri=process.env.MONGO_URI
if(!uri)
    throw new Error("Mongo URI not provided")

let clientpromise;

if(process.env.NODE_ENV==='development'){
    if(!globalThis._mongoclientpromise){
        const client=new MongoClient(uri);
        globalThis._mongoclientpromise=client.connect();
    }
    clientpromise=globalThis._mongoclientpromise
}else{
    const client=new MongoClient(uri);
    clientpromise=client.connect();
}

export default clientpromise