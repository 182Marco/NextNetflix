import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name: 'Billy',
  };
  
  const changeName = (state = initialState, action: PayloadAction<string>) => {
    const newState = { ...state };
    switch (action.type) {
      case 'CHANGENAME':
        newState.name === 'Billy'
          ? (newState.name = action.payload)
          : (newState.name = 'Billy');
        break;
      default:
        return newState;
    }
    return newState;
  };
  
  export default changeName;