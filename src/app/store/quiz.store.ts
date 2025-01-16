import { signalStore, withComputed, withState } from "@ngrx/signals";
import { InitialQuizSlice } from "./quiz.slice";
import { computed } from "@angular/core";

export const QuizStore = signalStore(
    { providedIn: 'root'},
    withState(InitialQuizSlice),
    withComputed((store) => {

        const currentQuestionIndex = computed(() => store.answers().length);
        const isDone = computed(() => store.answers().length === store.questions().length);
        const currentQuestion = computed(() => store.questions()[currentQuestionIndex()]);
        const questionsCount = computed(() => store.questions().length);
        
        return {
            currentQuestionIndex,
            isDone,
            currentQuestion,
            questionsCount
        }
    }
    )
)