//this is an action-creator
export const selectUser = (user) => {
  console.log ("you clicked on user: ", user.first);

  //this is the action
  return {
    type: 'USER_SELECTED',
    payload: user
  }

};//end of selectUser
