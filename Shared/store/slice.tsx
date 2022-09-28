import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch } from "../../featuresStore"
import {mockData} from "../../_tests_/mock_data";
import {
  FeaturesSharedSlice,
  FeaturesKeyValue,
} from "../../types";

const initialState: FeaturesSharedSlice = {
  error: null,
  mockData,
}

export const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    setSharedKey: (state, action: PayloadAction<FeaturesKeyValue>) => {
      const { key, value } = action.payload;
      // @ts-ignore
      state[key] = value;
    },
  },
});

export const useFeatureDispatch = () => useDispatch<AppDispatch>();
export const useFeatureSelect: TypedUseSelectorHook<RootState> = useSelector;
export const selectShared = (state: RootState) => state.shared;
export const { 
  setSharedKey,
} = sharedSlice.actions;
export default sharedSlice.reducer;
