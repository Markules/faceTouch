import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../../utils/utils';

const initalState = {
  name: '',
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.HAIR_TOUCH:
    case actionTypes.EYES_TOUCH:
    case actionTypes.NOSE_TOUCH:
    case actionTypes.CHEEKS_TOUCH:
    case actionTypes.MOUTH_TOUCH:
    case actionTypes.EARS_TOUCH:
      return {
        ...state,
        name: action.name,
      };

    case actionTypes.RESET_NAME:
      return {...state, name: ' '};

    default:
      return state;
  }
};

export default reducer;
