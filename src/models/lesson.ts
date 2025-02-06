import { CourseType } from './course';
import { Exercise } from './exercise';

/**
 * Represents the content of a lesson.
 */
export interface LessonContent {
  /**
   * The type of the lesson content.
   */
  type: CourseType;

  /**
   * An array of content IDs referencing.
   */
  contentIds: string[];
}

/**
 * Represents a lesson within a section.
 * A lesson contains educational content, related materials, and exercises.
 */
export interface Lesson {
  /**
   * Unique identifier for the lesson.
   */
  id: string;

  /**
   * The title of the lesson.
   */
  title: string;

  /**
   * (Optional) General description or introduction to the lesson.
   */
  description?: string;

  /**
   * A list of lesson materials.
   */
  materials: LessonContent[];

  /**
   * A list of exercises related to the lesson for practice.
   */
  exercises: Exercise[];
}
