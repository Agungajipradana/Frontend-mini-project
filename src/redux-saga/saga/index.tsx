import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeHotels from "../constant/hotelsConstant";
import { handleGetHotels, handleAddHotels, handleFindHotels, handleEditHotels, handleDelHotels } from "./HotelsSaga";
import * as ActionTypeFacilities from "../constant/facilitiesConstant";
import { handleGetFacilities, handleAddFacilities, handleFindFacilities, handleEditFacilities, handleDelFacilities } from "./FacilitiesSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeHotels.GET_HOTELS_REQUEST, handleGetHotels),
    takeEvery(ActionTypeHotels.ADD_HOTELS_REQUEST, handleAddHotels),
    takeEvery(ActionTypeHotels.FIND_HOTELS_REQUEST, handleFindHotels),
    takeEvery(ActionTypeHotels.EDIT_HOTELS_REQUEST, handleEditHotels),
    takeEvery(ActionTypeHotels.DEL_HOTELS_REQUEST, handleDelHotels),
    takeEvery(ActionTypeFacilities.GET_FACILITIES_REQUEST, handleGetFacilities),
    takeEvery(ActionTypeFacilities.ADD_FACILITIES_REQUEST, handleAddFacilities),
    takeEvery(ActionTypeFacilities.FIND_FACILITIES_REQUEST, handleFindFacilities),
    takeEvery(ActionTypeFacilities.EDIT_FACILITIES_REQUEST, handleEditFacilities),
    takeEvery(ActionTypeFacilities.DEL_FACILITIES_REQUEST, handleDelFacilities),
  ]);
}

export default watchAll;
