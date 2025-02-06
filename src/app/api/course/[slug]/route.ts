import { NextResponse } from "next/server";
import courses from "@/mocks/courses.json"; // Assuming the data is stored in `mocks/courses.json`

export async function GET() {
  return NextResponse.json(courses);
}
