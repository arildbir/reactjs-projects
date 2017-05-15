import axios from 'axios'

export const getGithubProfile = (username) => {
  console.log ("you want github data for username: ", username);
  //this is the action
  return function (dispatch) {
    axios.get('https://api.github.com/users/' + username)
      .then ((response) => {
        dispatch ({type: "GET_GITHUB_PROFILE", payload: response.data})
      })
      .catch((error) => {
        console.log ("error i getGithubProfile: ", error)
      })
  }
};//end of createNewUser
