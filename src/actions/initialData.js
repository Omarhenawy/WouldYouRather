import {InitialData} from '../components/Data';
import { getUsers } from './getUsers';
import {getQuestions} from './getQuestions';
import {Authenticate} from './authentication'
const AUTH_ID = 'sarahedo'
export function setInitialData(){
    return dispatch =>{
        return InitialData().then(({users,questions})=>{
            dispatch(getUsers(users));
            dispatch(getQuestions(questions));
            dispatch(Authenticate(AUTH_ID))
        })
    }
}