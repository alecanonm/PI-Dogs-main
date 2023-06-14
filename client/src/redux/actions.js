import axios from "axios";
import * as types from "./types";

// Add an array (dogs) to reducer with all dogs bringed  either  from API or data base
export const addDogs = () => {
  const endpoint = "http://localhost:3001/dogs";
  return async (dispatch) => {
    const response = await axios.get(endpoint);
    try {
      return dispatch({
        type: types.ADD_DOGS,
        payload: response.data,
      });
    } catch (err) {
      return err.message;
    }
  };
};

//Agrega todos los temperamentos en un array (temperaments) en el reducer
//Add all temperaments into an array (temperaments) onto reducer
export const addTemperament = () => {
  const endpoint = "http://localhost:3001/temperaments";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: types.ADD_TEMPERAMENTS,
        payload: response.data,
      });
    } catch (err) {
      return err.message;
    }
  };
};

//Filter all dogs by their origin into reducer
export const dogsByOrigin = (origin) => {
  return {
    type: types.FILRTER_ORIGIN,
    payload: origin,
  };
};

//Filter all dogs by temperament into reducer
export const dogsByTemperament = (temperament) => {
  return {
    type: types.FILTER_TEMPERAMENT,
    payload: temperament,
  };
};

//Filter all dogs by alphabet order into reducer
export const dogsByAlphabetical = (order) => {
  return {
    type: types.FILTER_ORDER,
    payload: order,
  };
};

//Filter all dogs by weight, from heaviest to lightest
export const dogsByWeight = (order) => {
  return {
    type: types.FILTER_WEIGHT,
    payload: order,
  };
};

//Find all dogs that match with a name
export const addDogsByName = (input) => {
  const endpoint = `http://localhost:3001/dogs/name?name=${input}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: types.ADD_DOGS_NAME,
        payload: response.data,
      });
    } catch (err) {
      return dispatch({
        type: types.ADD_DOGS_NAME,
        payload: [err.response.data?.error],
      });
    }
  };
};

//Find all dogs that match with a name, this action was created on porpuse to give functionality to searchBar to be able to bring "suggestions"
export const addDogsOnSearch = (input) => {
  const endpoint = `http://localhost:3001/dogs/name?name=${input}`;
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: types.ADD_DOGS_ONSEARCH,
        payload: response.data,
      });
    } catch (err) {
      return err.response.data?.error;
    }
  };
};

//Esta action nos permite crear un perro y guardarlo en la base de datos
//This action allow us to create a new dog an save it into data base
export const postDog = async (dog) => {
  try {
    const endpoint = `http://localhost:3001/dogs`;
    const response = await axios.post(endpoint, dog);
    return response;
  } catch (err) {
    return err.response.data?.error;
  }
};

//This method only brings dogs from data base
export const getDogsFromDB = () => {
  const endpoint = "http://localhost:3001/dogs/db";
  return async (dispatch) => {
    try {
      const response = await axios.get(endpoint);
      return dispatch({
        type: types.ADD_DOGS_DB,
        payload: response.data,
      });
    } catch (err) {
      return err.response.data?.error;
    }
  };
};
