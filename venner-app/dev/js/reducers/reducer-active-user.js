//this contains whatever user got selected
//this reducer shall listen to the action "USER_SELECTED"
//obs whenever an action occurs, it will be sendt to all reducers.

//state=null because onInit this reducer has to be set to something
export default function reducers(state={}, action){
  switch(action.type) {
    case "USER_SELECTED":
      return action.payload;
      break;
  }
  return state;
}
