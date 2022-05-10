import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;

      const newfavorite = state.favorites.includes(idToAdd)
        ? state.favorites.filter((fav) => fav !== idToAdd)
        : [...state.favorites, idToAdd];
      state.favorites = newfavorite;
    },
  },
});

export const { toggleFavorites } = userSlice.actions;
export default userSlice.reducer;
