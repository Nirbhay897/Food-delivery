import {createSlice} from "@reduxjs/toolkit"

const initialState ={
  restaurant: {
    if: null,
    imgUrl: null,
    title: null,
    rating: null,
    address: null,
    short_description: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
      name: "restaurant",
      initialState,
      reducers: {
        setRestaurant: (state, action) =>{
          state.restaurant = action.payload;
        }
      },
})


export const {setRestaurant} = restaurantSlice.actions;
export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;