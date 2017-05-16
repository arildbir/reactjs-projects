export default function reducers(state={showGithub:false}, action){
  console.log("githubReducer har nå fått inn action:" , action)

  switch(action.type) {
    case "GET_GITHUB_PROFILE": {
      return {
        ...state, showGithub:true, github: action.payload
      }
    }//case
    case "GET_GITHUB_PROFILE_ERROR": {
      return {
        ...state, showGithub:false
      }
    }//case
  }
  return state;
}
