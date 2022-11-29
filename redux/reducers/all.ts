import { PayloadAction } from "@reduxjs/toolkit";

export interface IState {
  globalSettings: Lang,
} 

export interface Lang {
  language: string,
} 

const initialState : Lang= {
    language: 'en-US',
};
  
  const globalSettings = (state = initialState, action: PayloadAction<string>) => {
    const newState = { ...state };
    switch (action.type) {
      case 'SETLANGUAGE':
          newState.language = action.payload;
        break;
      default:
        return newState;
    }
    return newState;
  };
  
  export default globalSettings;