import { createSelector } from "@reduxjs/toolkit";

// selector
const TourSelector = (state) => state.Tour;

const selectTourSelector = createSelector(
    TourSelector,
    state => state.tours
);

//page
const selectPageSelector = createSelector(
    TourSelector,
    state => state.page
);
//size
const selectSizeSelector = createSelector(
    TourSelector,
    state => state.size
);
//total size
const selectTotalSizeSelector = createSelector(
    TourSelector,
    state => state.totalSize
);

// selected Rows
const selectselectRowsSelector = createSelector(
    TourSelector,
    state => state.selectRows
);


// function
export const selectTours = (state) => {
    return selectTourSelector(state);
}
//page
export const selectPage = (state) => {
    return selectPageSelector(state);
}
//size
export const selectSize = (state) => {
    return selectSizeSelector(state);
}
//total size
export const selectTotalSize = (state) => {
    return selectTotalSizeSelector(state);
}

// select rows
export const selectSelectedRows = (state) => {
    return selectselectRowsSelector(state);
}