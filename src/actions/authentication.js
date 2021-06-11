export const AUTH_USER = 'AUTH_USER';
export function Authenticate (id){
    return {
        type: AUTH_USER,
        id
    }
}