import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ status: true })
    } catch (err) {
        NextResponse.json({ status: false, error: err }, {
            status: 400
        })
    }
}