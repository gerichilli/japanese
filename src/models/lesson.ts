import { CourseType } from './course';
import { Exercise } from './exercise';
import { Grammar } from './grammar';

export interface LessonContent {
  type: CourseType;
  content: Grammar; // Grammar | Vocabulary | Reading;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  materials: LessonContent[];
  exercises: Exercise[];
}