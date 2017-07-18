import fetch from 'isomorphic-fetch'

export const fetching = (loadingdata) => {
  return{
    type: 'FETCHING',
    payload: loadingdata
  }
}

export const error = (err) => {
  return{
    type: 'ERROR',
    payload:err
  }
}

export const dropdown = (value) => {
    return{
      type: 'DROP',
      payload: value
    }
    console.log(value)
}

export const getStarships = () => {
  return(dispatch) => {
    dispatch(fetching("loadingdata"))
    fetch(`http://swapi.co/api/films/`)
    .then(response => response.json())
    .then((json) => {
      const {results} = json
      dispatch(getStarshipSuccess(results))
    })
  }
}

export const getStarshipSuccess = (starships)=>{
  return {
    type:'GET_STARSHIPS_SUCCESS',
    payload:starships
  }
}

export const filter = (filterships) => {
  return{
    type: 'FILTER_STARSHIPS',
    payload: filterships
  }
}