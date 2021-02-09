import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../../utils/utils';

const initalState = {
  name: null,
};

const hairTouch = (state, action) => {
  return updateObject(state, {
    name: action.name,
  });
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
      case actionTypes.HAIR_TOUCH:
          return hairTouch(state, action)
       
      default:
        return state;
    }
  };
  
  export default reducer;