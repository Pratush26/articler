import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.NEWS_API_KEY;
        if (!apiKey) return NextResponse.json({ success: false, data: [], message: "Missing NEWS_API_KEY" });
        const body = await request.json()
        const result = await fetch(`https://newsapi.org/v2/top-headlines/sources?country=${body.country}&category=${body.category}&language=${body.language}&apiKey=${apiKey}`)
        const data = await result.json()
        return NextResponse.json({ success: true, data: data ?? [] })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ success: false, data: [] })
    }
}