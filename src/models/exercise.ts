export interface Exercise {
  id: string;
  type: "multiple_choice" | "fill_in_the_blank" | "sentence_reorder";
  question: string;
  options?: string[];
  correctAnswer: string;
}