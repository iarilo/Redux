import{createSlice} from '@reduxjs/toolkit'

const timerSlice = createSlice({
 name: 'timerName',
 initialState: {
  value: 0,
  showBooton: false,
  stateCount: false,
 },
 reducers:{
  setIsLogout(state){
   state.showBooton = !state.showBooton 
  },
  completadButton(state){
    state.stateCount = !state.stateCount
  },

  resetTimer(state){
   state.value = 0;
   state.stateCount = false 
  },
  
  increment(state){
    state.value += 1
  }

 } 

});

export const {setIsLogout,completadButton,resetTimer,increment} = timerSlice.actions;
export default timerSlice.reducer;

//  setIsLogout,completadButton, resetTimer,  increment
























//-------------------------------------------------
/*
const countSlice = createSlice({
  name: "countName",
  initialState: {
    value: 0,
    completed: false,
    stateButton: false,
  },
  reducers: {
    setIsLogout(state) {
      state.completed = !state.completed;
    },

    completadButton(state) {
      state.stateButton = !state.stateButton;
    },

  // resetTimer(state){
  //   state.value = 0
  // },

  // increment(state) {
  //   state.value  +=  1
  // }

  },
});
export const { setIsLogout, completadButton,resetTimer,increment} = countSlice.actions;
export default countSlice.reducer;
*/