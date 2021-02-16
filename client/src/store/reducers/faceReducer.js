import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../../utils/utils';

const initalState = {
  name: '',
};

// Set name to hair
const hairTouch = (state, action) => {
  return updateObject(state, {
    name: action.name,
  });
};

// Set name to eyes
const eyesTouch = (state, action) => {
  return updateObject(state, {
    name: action.name,
  });
};

// Set name to nose
const noseTouch = (state, action) => {
  return updateObject(state, {
    name: action.name,
  });
};

// Set name to cheeks
const cheeksTouch = (state, action) => {
  return updateObject(state, {
    name: action.name,
  });
};

// Set name to mouth
const mouthTouch = (state, action) => {
  return updateObject(state, {
    name: action.name,
  });
};

// Set name to ears
const earsTouch = (state, action) => {
    return updateObject(state, {
      name: action.name,
    });
  };

// reset name to null
const resetName = async (state, action) => {
  return await updateObject(state, {
    name: '',
  });
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.HAIR_TOUCH:
      return hairTouch(state, action);
    case actionTypes.EYES_TOUCH:
      return eyesTouch(state, action);
    case actionTypes.NOSE_TOUCH:
      return noseTouch(state, action);
    case actionTypes.CHEEKS_TOUCH:
      return cheeksTouch(state, action);
    case actionTypes.MOUTH_TOUCH:
      return mouthTouch(state, action);
      case actionTypes.EARS_TOUCH:
      return earsTouch(state, action);

    case actionTypes.RESET_NAME:
      return resetName(state, action);

    default:
      return state;
  }
};

export default reducer;
