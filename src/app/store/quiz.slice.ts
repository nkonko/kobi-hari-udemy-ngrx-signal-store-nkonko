import { Question } from "../models/question.model"
import { QUESTIONS } from "../data/questions";

export interface QuizSlice {
    questions: Question[]
    answers: number[]
}

export const InitialQuizSlice: QuizSlice = {
    questions: QUESTIONS,
    answers: []
}

