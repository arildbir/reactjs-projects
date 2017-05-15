/*export function createNewUser(userData) {
  return {
    type: "CREATE_NEW_USER",
    payload: userData
  }//return
}//function*/
//this is the action creator. Its job is to return is the action
export function createNewUser(userData) {
  console.log ("du klikket på lag ny bruker", userData);
  return {
    type: "CREATE_NEW_USER",
    payload: userData
  }//return
}//function


/*
import {createNewUser} from './userActions'

createNewUser(TheUserObject)
*/
