import * as ActionType from "../constant/facilitiesConstant";

const init_state = {
  facilities: [],
};

const FacilitiesReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.GET_FACILITIES_SUCCESS:
      return GetFacilities(state, action);
    case ActionType.ADD_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.ADD_FACILITIES_SUCCESS:
      return AddFacilities(state, action);
    case ActionType.FIND_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.FIND_FACILITIES_SUCCESS:
      return FindFacilities(state, action);
    case ActionType.EDIT_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.EDIT_FACILITIES_SUCCESS:
      return EditFacilities(state, action);
    case ActionType.DEL_FACILITIES_REQUEST:
      return { ...state };
    case ActionType.DEL_FACILITIES_SUCCESS:
      return DelFacilities(state, action);
    default:
      return { ...state };
  }
};

const GetFacilities = (state: any, action: any) => {
  return {
    ...state,
    facilities: action.payload,
  };
};

const AddFacilities = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilities: [...state.Facilities, payload],
  };
};

const FindFacilities = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilities: payload,
  };
};

const EditFacilities = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    facilities: payload,
  };
};

const DelFacilities = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default FacilitiesReduce;
