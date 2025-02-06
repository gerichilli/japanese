import { NextResponse } from "next/server";
import courses from "@/mocks/courses.json"; 

export async function GET() {
  return NextResponse.json(courses, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
