import { Section } from './section';

/**
 * Enum representing different types of language learning courses.
 */
export enum CourseType {
  /** Grammar-focused course */
  GRAMMAR = "grammar",

  /** Vocabulary-focused course */
  VOCABULARY = "vocabulary",

  /** Reading comprehension-focused course */
  READING = "reading"
}

/**
 * Represents a language learning course, which consists of multiple sections.
 */
export interface Course {
  /**
   * Unique identifier for the course.
   */
  id: string;

  /**
   * The name or title of the course.
   */
  title: string;

  /**
   * URL-friendly identifier for the course.
   */
  slug: string;

  /**
   * A brief description of the course content.
   */
  description: string;

  /**
   * The category/type of the course.
   */
  type: CourseType;

  /**
   * A list of sections that belong to this course.
   */
  sections: Section[];

  /**
   * Keywords or tags related to the course.
   * Example: ["JLPT", "N3", "Shinkanzen Master", "Japanese"]
   */
  tags?: string[];

  /**
   * Image URL representing the course.
   */
  imageUrl: string;
}
