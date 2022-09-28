import { AppThunk } from "../../../featuresStore"
// import { setSharedKey } from "../../../Shared"

export const firstAction = (payload:any): AppThunk => async (dispatch: any) => {
  try {
    console.log ("firstAction", firstAction);
  } catch (error: any) {
    // dispatch(setSharedKey({ key: 'error', value: {
    //   severity: "error",
    //   code: "AI-101",
    //   message: error.toString()
    // }}))
  }
}
