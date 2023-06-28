import {
  ADD_DOGS,
  ADD_TEMPERAMENTS,
  FILRTER_ORIGIN,
  FILTER_TEMPERAMENT,
  FILTER_ORDER,
  FILTER_WEIGHT,
  ADD_DOGS_NAME,
  ADD_DOGS_ONSEARCH,
  ADD_DOGS_DB,
} from "./types";

const initialState = {
  dogs: [], //--> Arreglo con todos los perros tanto de la api y la base de datos
  dogsDB: [], //--> Arreglo los perros que solo hay en la base de datos
  toFilter: [], //--> Arreglo auxiliar para guardar unicamente los perros filtrados
  dogsOnSearch: [], //--> Arreglo auxiliar para buscar los perros solamente en la barra buscadora
  temperaments: [], //--> Arreglo en donde voy a guardar todos los temperamentos de los perros
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_DOGS:
      return {
        ...state,
        dogs: payload,
        toFilter: payload,
      };
    case ADD_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      };
    case FILRTER_ORIGIN:
      const filterByOrigin = state.toFilter.filter(
        (dog) => dog.origin === payload
      );
      return {
        ...state,
        dogs: filterByOrigin,
      };
    case FILTER_TEMPERAMENT:
      const filteredByTemperaments = state.toFilter.filter(
        (dog) =>
          (dog.temperament && dog.temperament.includes(payload)) ||
          (dog.temperaments &&
            dog.temperaments.filter((temp) => temp.name.includes(payload)))
      );
      return {
        ...state,
        dogs: filteredByTemperaments,
      };
    case FILTER_ORDER:
      const copyDogs = [...state.dogs];
      const ordered =
        payload === "A-z"
          ? copyDogs.sort((a, b) => {
              return a.name < b.name ? -1 : 1;
            })
          : copyDogs.sort((a, b) => {
              return a.name < b.name ? 1 : -1;
            });

      return {
        ...state,
        dogs: ordered,
      };
    case FILTER_WEIGHT:
      const copyWeightDogs = [...state.dogs];
      const orderedByweight =
        payload === "W-l"
          ? copyWeightDogs.sort((a, b) => {
              const weightA = a.weight?.metric
                ? parseInt(a.weight.metric.split(" ")[0])
                : parseInt(a.weight);
              const weightB = b.weight?.metric
                ? parseInt(b.weight.metric.split(" ")[0])
                : parseInt(b.weight);
              if (weightA > weightB) {
                return -1;
              }
              if (weightA < weightB) {
                return 1;
              }
              return 0;
            })
          : copyWeightDogs.sort((a, b) => {
              const weightA = a.weight?.metric
                ? parseInt(a.weight.metric.split(" ")[0])
                : parseInt(a.weight);
              const weightB = b.weight?.metric
                ? parseInt(b.weight.metric.split(" ")[0])
                : parseInt(b.weight);
              if (weightA > weightB) {
                return 1;
              }
              if (weightA < weightB) {
                return -1;
              }
              return 0;
            });

      return {
        ...state,
        dogs: orderedByweight,
      };

    case ADD_DOGS_NAME:
      return {
        ...state,
        dogs: payload,
        toFilter: payload,
      };

    case ADD_DOGS_ONSEARCH:
      return {
        ...state,
        dogsOnSearch: payload,
      };

    case ADD_DOGS_DB:
      return {
        ...state,
        dogsDB: payload,
      };
    default:
      return state;
  }
}
