import { Section } from './section';

export enum CourseType {
  GRAMMAR = "grammar",
  VOCABULARY = "vocabulary",
  READING = "reading"
}

export interface Course {
  id: string;
  title: string;
  type: CourseType;
  sections: Section[];
}