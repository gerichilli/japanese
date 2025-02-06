import axios from "axios";
import { Course } from "@/models/course";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:3000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  proxy: false, // Disable proxy
  headers: {
    "Connection": "close", 
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

/**
 * Fetches a list of courses.
 * @returns {Promise<Course[]>} An array of courses
 */
export async function getCourses(): Promise<Course[]> {
  try {
    const response = await api.get<Course[]>("/api/course");
    return response.data;
  }  catch (error: unknown) {
    console.error("Fetch failed:", error);
    return [];
  }
}


/**
 * Fetches a single course by slug.
 * @param {string} slug - The course slug
 * @returns {Promise<Course>} The course data
 */
export async function getCourseBySlug(slug: string): Promise<Course> {
  const response = await api.get<Course>(`/api/course/${slug}`);
  return response.data;
}

export default api;
