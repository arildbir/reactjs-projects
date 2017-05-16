// a reducer is a piece of data that we want to store in our Store
//this is a piece of memory that the app must be aware of.
//reducers also tell the app what shall happen when an action occurs

//in charge of storing and changes the users
//list of user i want im my stre


//this contains whatever user got selected
//this reducer shall listen to the action "USER_SELECTED"
//obs whenever an action occurs, it will be sendt to all reducers.

export default function reducers(state={
  user:
  {
  email:"arildbirkeland@hotmail.com",
github: "arildbir",
password:"e",
passwordConfirmation:"e",
timezone:"Pacific/Honolulu",
username:"arildbirkeland@hotmail.com",
userLoggedIn:true
  }
}, action){
  console.log("userReducer har nå fått inn action:" , action)

  switch(action.type) {
    case "CREATE_NEW_USER": {
      return {
        ...state,
         user: action.payload
      }
    }//case
    case "LOGG_OUT_USER": {
      return {
        ...state,
         user: {}
      }
    }//case
  }

  return state;
}
