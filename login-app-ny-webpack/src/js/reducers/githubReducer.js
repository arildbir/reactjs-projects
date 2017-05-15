export default function reducers(state={}, action){
  console.log("githubReducer har nå fått inn action:" , action)

  switch(action.type) {
    case "GET_GITHUB_PROFILE": {
      return {
        ...state, github: action.payload
      }
    }
  }
  return state;
}
