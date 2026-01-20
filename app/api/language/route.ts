import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const {db} = await connectDB()
        const result = await db.collection("language").find({}).toArray()
        return NextResponse.json({success: true, data: result ?? []})
    } catch (err) {
        console.error(err)
        return NextResponse.json({success: false, data: []})
    }
}