import { QuestionAnswer } from '../components/Data';
import {AnswerQuestion} from '../actions/getQuestions'

export const GET_USERS = 'GET_USERS';
export function getUsers(users){
    return{
        type: GET_USERS,
        users
    }
}


export const ANSWER_TO_USER = 'ANSWER_TO_USER';

function AnswerUser(Auth, id, answer) {
  return {
    type: ANSWER_TO_USER,
    Auth,
    id,
    answer
  };
}
export const ADD_QUESTION = 'ADD_QUESTION' ;
export function addQuestion ({id , author}){
  return {
    type : ADD_QUESTION,
    id,
    author
  }
}



export function handleQuestionAnswer(Auth, id, answer) {
  return dispatch => {
    dispatch(AnswerUser(Auth, answer , id));
    dispatch(AnswerQuestion(Auth, id, answer));

    return QuestionAnswer(Auth, id, answer).catch(e => {
      console.warn(' handlequestion:', e);
    });
  };
}
