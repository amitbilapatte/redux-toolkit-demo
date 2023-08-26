const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecream: 10,
};
const icecreamSlice = createSlice({
  //createSlice here automatically generates actions by the name we define in the reducer i.e. here actions gerenerated will be "ordered" and "restocked"
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
});

module.exports = icecreamSlice.reducer; // export reducer as default export
module.exports.icecreamActions = icecreamSlice.actions; //export actions as named exports
// This Last line is exporting the generated action creators from your slice.
// Redux Toolkit's createSlice automatically generates action creators
// based on the names you provide in the reducers object.
//  By exporting cakeActions, you're allowing other parts
// of your application to directly use these action creators to
//  dispatch actions without having to manually define action types.
