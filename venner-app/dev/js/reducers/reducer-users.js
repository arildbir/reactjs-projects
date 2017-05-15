// a reducer is a piece of data that we want to store in our Store
//this is a piece of memory that the app must be aware of.
//reducers also tell the app what shall happen when an action occurs

//in charge of storing and changes the users
//list of user i want im my stre


//this contains whatever user got selected
//this reducer shall listen to the action "USER_SELECTED"
//obs whenever an action occurs, it will be sendt to all reducers.

//state=null because onInit this reducer has to be set to something
export default function reducers(state=defaultUsers, action){
  return state;
}

const defaultUsers = [
  {
    id: 1,
    first: "Arild",
    last: "Birkeland",
    age: 71,
    description: "Lager awesom apps",
    thumbnail: "http://s4.thingpic.com/images/jp/NgaK2QAbZXnoxhTo1DpiLDWY.jpeg"
  },
  {
    id: 2,
    first: "Morten",
    last: "Hørte",
    age: 27,
    description: "Liker øl, reise og sykehusmat.",
    thumbnail: "https://s-media-cache-ak0.pinimg.com/originals/91/44/ce/9144ce8999773edee56567a8ee15e738.jpg"
  },
  {
    id: 3,
    first: "Joakim",
    last: "Gjerde",
    age: 24,
    description: "Liker juss og pølser.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/9/94/Seal_2012.jpg"
  }
]
