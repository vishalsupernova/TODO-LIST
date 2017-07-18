const initialState = {fetching: false, starships: [], filterShips: [],searchText:'', error: null}

function display(state = initialState, action){
  switch(action.type){
    case 'FETCHING':
      return{...state, fetching: action.payload};
    case 'GET_STARSHIPS_SUCCESS': 
      return{...state, fetching: false, starships: action.payload};
    case 'ERROR':
      return{...state,fetching:false, error: action.payload};
    case 'FILTER_STARSHIPS':
    let filteredShips = state.starships.filter((starship) =>{return starship.name.indexOf(action.payload)!=-1}) //Returns indexOf all the matching values in the array
      return{...state, searchText: action.payload, filterShips:filteredShips};
    default: 
      return state
  }
}

export default display