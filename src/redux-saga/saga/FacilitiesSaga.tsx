import { call, put } from "redux-saga/effects";
import Facilities from "@/api/Facilities";
import {
  GetFacilitiesSuccess,
  GetFacilitiesFailed,
  AddFacilitiesSuccess,
  AddFacilitiesFailed,
  FindFacilitiesSuccess,
  FindFacilitiesFailed,
  EditFacilitiesSuccess,
  EditFacilitiesFailed,
  DelFacilitiesSuccess,
  DelFacilitiesFailed,
} from "../action/facilitiesAction";

function* handleGetFacilities() {
  try {
    const result = yield call(Facilities.GetData);
    yield put(GetFacilitiesSuccess(result));
  } catch (error) {
    yield put(GetFacilitiesFailed(error));
  }
}

function* handleAddFacilities(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Facilities.Create, payload);
    yield put(AddFacilitiesSuccess(result.data));
  } catch (error) {
    yield put(AddFacilitiesFailed(error));
  }
}

function* handleFindFacilities(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Facilities.findData, payload);
    yield put(FindFacilitiesSuccess(result));
  } catch (error) {
    yield put(FindFacilitiesFailed(error));
  }
}
function* handleEditFacilities(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Facilities.Update, payload);
    yield put(EditFacilitiesSuccess(result.data));
  } catch (error) {
    yield put(EditFacilitiesFailed(error));
  }
}

function* handleDelFacilities(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Facilities.deleted, payload);
    yield put(DelFacilitiesSuccess(result.data));
  } catch (error) {
    yield put(DelFacilitiesFailed(error));
  }
}

export { handleGetFacilities, handleAddFacilities, handleFindFacilities, handleEditFacilities, handleDelFacilities };
