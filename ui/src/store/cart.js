import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartStudentsAndGroups",
  initialState: {
    studentsObserve: [],
    groupsObserve: [],
  },
  reducers: {
    addStudent: (state, action) => {
      let shouldI = true;
      state.studentsObserve.forEach((item) => {
        if (item.id === action.payload.id) {
          shouldI = false;
        }
      });
      if (shouldI) {
        state.studentsObserve.push(action.payload);
      }
    },
    deleteStudent: (state, action) => {
      state.studentsObserve = state.studentsObserve.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addGroup: (state, action) => {
      let shouldI = true;
      state.groupsObserve.forEach((item) => {
        if (item.id === action.payload.id) {
          shouldI = false;
        }
      });
      if (shouldI) {
        state.groupsObserve.push(action.payload);
      }
    },
    deleteGroup: (state, action) => {
      state.groupsObserve = state.groupsObserve.filter((item) => {
        return item.id !== action.payload;
      });
    },
    refresh: (state) => {
      state.studentsObserve = [];
      state.groupsObserve = [];
    },
  },
});

export const { addStudent, deleteStudent, addGroup, deleteGroup, refresh } =
  cartSlice.actions;

export default cartSlice.reducer;
