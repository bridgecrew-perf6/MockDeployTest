import * as types from "../constants";

const initialState = {
    tours: []
   
};

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
      case types.GET_LIST_TOUR:
        return {
          ...state,
          tours: actions.payload,
        };

      case types.GET_LIST_TOUR_SELECTED_ROWS:
      return{
        ...state,
        selectRows: actions.payload
      };
      default:
        return state;
    }
  }
  