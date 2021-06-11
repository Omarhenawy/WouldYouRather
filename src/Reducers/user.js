import { GET_USERS } from './../actions/getUsers';
import { ANSWER_TO_USER } from './../actions/getUsers';
import { ADD_QUESTION } from './../actions/getUsers';
 

export default function users(state={},action){
    if(action.type === GET_USERS){
        return {...state,...action.users};
    }
    else if(action.type === ANSWER_TO_USER ){
              const { Auth, id, answer } = action;
              console.log(action)
     return {
        ...state,
        [Auth]: {
          ...state[Auth],
          answers: {
            ...state[Auth].answers,
            [id]: answer,
          },
        },
      }
    }
    else if (action.type === ADD_QUESTION){
      const {id,author} = action ;
      return{
        ...state,
        [author]:{
          ...state[author],
          questions :state[author].questions.concat(id)
        }
      };
    }
    else{
        return state;
    }
}