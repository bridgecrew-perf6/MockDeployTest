import { createSelector } from "@reduxjs/toolkit";

// selector
const GroupSelector = (state) => state.Group;

const selectGroupSelector = createSelector(
    GroupSelector,
    state => state.groups
);
//page
const selectPageSelector = createSelector(
    GroupSelector,
    state => state.page
);
//size
const selectSizeSelector = createSelector(
    GroupSelector,
    state => state.size
);
//total size
const selectTotalSizeSelector = createSelector(
    GroupSelector,
    state => state.totalSize
);

// filter
const selectMinTotalMemberSelector = createSelector(
    GroupSelector,
    state => state.minTotalMember
);

const selectMaxTotalMemberSelector = createSelector(
    GroupSelector,
    state => state.maxTotalMember
);

// search
const selectSearchSelector = createSelector(
    GroupSelector,
    state => state.search
);

// selected Rows
const selectselectRowsSelector = createSelector(
    GroupSelector,
    state => state.selectRows
);

// function
export const selectGroups = (state) => {
    return selectGroupSelector(state);
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

// filter
export const selectMinTotalMember = (state) => {
    return selectMinTotalMemberSelector(state);
}

export const selectMaxTotalMember = (state) => {
    return selectMaxTotalMemberSelector(state);
}

// search
export const selectSearch = (state) => {
    return selectSearchSelector(state);
}

// select rows
export const selectSelectedRows = (state) => {
    return selectselectRowsSelector(state);
}
