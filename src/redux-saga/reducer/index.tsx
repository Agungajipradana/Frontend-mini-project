import { combineReducers } from "redux";
import HotelsReduce from "./hotelsReducer";
import FacilitiesReduce from "./facilitiesReducer";

const rootReducer = combineReducers({
  hotelsState: HotelsReduce,
  facilitiesState: FacilitiesReduce,
});

export default rootReducer;
