//this is the action creator. Its job is to return is the action
export const createNewUser = (user) => {
  console.log ("you clicked on user: ", user);
  //this is the action
  return {
    type: 'CREATE_NEW_USER',
    payload: user
  }
};//end of createNewUser


/*
import {createNewUser} from './userActions'
createNewUser(TheUserObject)
*/
