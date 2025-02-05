import { Lesson } from './lesson';

export interface Section {
  id: string;
  title: string;
  lessons: Lesson[];
}