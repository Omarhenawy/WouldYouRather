import { GET_QUESTIONS ,ANSWER_TO_QUESTION,ADD_NEW_QUESTION } from './../actions/getQuestions';

export default function questions(state ={},action){
    if(action.type === GET_QUESTIONS){
        return {...state,...action.questions};
    }
    else if(action.type === ANSWER_TO_QUESTION){
        const { Auth, id, answer } = action;
              return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat(Auth)
          }
        }
      };


    }
    else if (action.type === ADD_NEW_QUESTION){
      const {question} = action ;
      return{
        ...state,
        [question.id]: question
      }

    }
    else{
        return state;
    }
}

