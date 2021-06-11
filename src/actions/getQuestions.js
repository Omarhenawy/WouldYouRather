import  {_saveQuestion} from '../components/Data';
import { addQuestion } from './getUsers';

export const GET_QUESTIONS = 'GET_QUESTIONS'
export function getQuestions(questions){
    return{
        type: GET_QUESTIONS,
        questions
    }
}

export const ANSWER_TO_QUESTION = 'ANSWER_TO_QUESTION';

export function AnswerQuestion(Auth, id, answer) {
  return {
    type: ANSWER_TO_QUESTION,
    Auth,
    id,
    answer
  };
}
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
 export function  addNewQuestion(question){
   return{
     type :ADD_NEW_QUESTION,
     question
   }
 }

 export function SavedQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return _saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addNewQuestion(question));
        dispatch(addQuestion(question));
      }
    );
  };
}
