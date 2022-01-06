import * as types from "../constants";

export function getListTourAction(tours) {
  return {
    type: types.GET_LIST_TOUR,
    payload: {
     tours
    }
  };
}
export function updateSelectedRowsActions(selectedRows) {
  return {
    type: types.GET_LIST_TOUR_SELECTED_ROWS,
    payload: selectedRows
  };
}
