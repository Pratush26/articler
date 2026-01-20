import { Db, MongoClient } from "mongodb";
import clientPromise from "./MongoClient";

export async function connectDB(): Promise<{
    client: MongoClient;
    db: Db;
}> {
    const client = await clientPromise;
    const db = client.db("articler");
    return { client, db };
}