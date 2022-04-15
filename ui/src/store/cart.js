import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartStudentsAndGroups",
  initialState: {
    students: [],
    groups: [],
  },
  reducers: {
    addStudent: (state, action) => {
      let shouldI = true;
      state.students.forEach((item) => {
        if (item.id === action.payload.id) {
          shouldI = false;
        }
      });
      if (shouldI) {
        state.students.push(action.payload);
      }
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter((item) => {
        return item.id !== action.payload;
      });
    },
    addGroup: (state, action) => {
      let shouldI = true;
      state.groups.forEach((item) => {
        if (item.id === action.payload.id) {
          shouldI = false;
        }
      });
      if (shouldI) {
        state.groups.push(action.payload);
      }
    },
    deleteGroup: (state, action) => {
      state.groups = state.groups.filter((item) => {
        return item.id !== action.payload;
      });
    },
    refresh: (state) => {
      state.groups = [];
      state.students = [];
    },
  },
});

export const { addStudent, deleteStudent, addGroup, deleteGroup, refresh } =
  cartSlice.actions;

export default cartSlice.reducer;
