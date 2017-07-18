const initialState = {fetching: false, starships: [], filterShips: [],searchText:'', error: null, lists: [], selectedStarship: null}

function display(state = initialState, action){
  console.log(action)
  switch(action.type){
    case 'FETCHING':
      return{...state, fetching: action.payload};
    case 'GET_STARSHIPS_SUCCESS': 
      return{...state, fetching: false, starships: action.payload};
    case 'ERROR':
      return{...state,fetching:false, error: action.payload};
    case 'DROP':
      let {payload} = action
      return {...state, selectedStarship: state.starships.find((starship)=> starship.title===payload)}
    // case 'FILTER_STARSHIPS':
    // let filteredShips = state.starships.filter((starship) =>{return starship.name.indexOf(action.payload)!=-1}) //Returns indexOf all the matching values in the array
    //   return{...state, searchText: action.payload, filterShips:filteredShips};
    default: 
      return state
  }
}

export default display