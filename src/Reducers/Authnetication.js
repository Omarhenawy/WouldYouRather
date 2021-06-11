import { AUTH_USER } from './../actions/authentication';
export default function Auth (state = null , action){
    if(action.type === AUTH_USER){
        return action.id;
    }
    return state;
}
