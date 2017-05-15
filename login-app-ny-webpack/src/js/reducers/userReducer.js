// a reducer is a piece of data that we want to store in our Store
//this is a piece of memory that the app must be aware of.
//reducers also tell the app what shall happen when an action occurs

//in charge of storing and changes the users
//list of user i want im my stre


//this contains whatever user got selected
//this reducer shall listen to the action "USER_SELECTED"
//obs whenever an action occurs, it will be sendt to all reducers.

export default function reducers(state={name: "Arild"}, action){
  switch(action.type) {
    case "ADD_NEW_USER":
      return {...state, user: action.payload};
      break;
  }
  return state;
}
