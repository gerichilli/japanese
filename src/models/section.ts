import { Lesson } from './lesson';

/**
 * Represents a section within a course.
 * A section groups multiple lessons together under a specific topic.
 */
export interface Section {
  /**
   * Unique identifier for the section.
   */
  id: string;

  /**
   * The title or name of the section.
   */
  title: string;

  /**
   * A list of lessons included in this section.
   */
  lessons: Lesson[];
}
