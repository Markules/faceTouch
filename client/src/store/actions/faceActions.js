import * as actionTypes from './actionTypes';

// Dispatch action type and name to hair
export const hairTouch = () => {
  return {
    type: actionTypes.HAIR_TOUCH,
    name: 'Hair',
    
  };
};

// Dispatch action type and name to eyes
export const eyesTouch = () => {
  return {
    type: actionTypes.EYES_TOUCH,
    name: 'Eyes',
  };
};

// Dispatch action type and name to nose
export const noseTouch = () => {
    return {
      type: actionTypes.NOSE_TOUCH,
      name: 'Nose',
    };
  };

  // Dispatch action type and name to cheeks
export const cheeksTouch = () => {
    return {
      type: actionTypes.CHEEKS_TOUCH,
      name: 'Cheeks',
    };
  };

// Dispatch action type and name to mouth
export const mouthTouch = () => {
    return {
      type: actionTypes.MOUTH_TOUCH,
      name: 'Mouth',
    };
  };

  // Dispatch action type and name to ears
export const earsTouch = () => {
    return {
      type: actionTypes.EARS_TOUCH,
      name: 'Ears',
    };
  };


// Reset name 
export const resetName = () => {
   return {
   type:  actionTypes.RESET_NAME,
  };
};

// Set hair action
export const tocuhedHair = () => {
  return (dispatch) => {
    dispatch(hairTouch());
    setTimeout(() => {
      dispatch(resetName());
    }, 1500);
  };
};

// Set eyes action
export const tocuhedEyes = () => {
  return (dispatch) => {
    dispatch(eyesTouch());
     setTimeout(() => {
    dispatch(resetName());
    }, 1000);
  };
};

// Set nose action
export const tocuhedNose = () => {
    return (dispatch) => {
      dispatch(noseTouch());
      setTimeout(() => {
        dispatch(resetName());
      }, 1000);
    };
  };

  // Set cheeks action
  export const tocuhedCheeks = () => {
    return (dispatch) => {
      dispatch(cheeksTouch());
      setTimeout(() => {
        dispatch(resetName());
      }, 1000);
    };
  };

  // Set mouth action
  export const tocuhedMouth = () => {
    return (dispatch) => {
      dispatch(mouthTouch());
      setTimeout(() => {
        dispatch(resetName());
      }, 1000);
    };
  };

    // Set ears action
    export const tocuhedEars = () => {
        return (dispatch) => {
          dispatch(earsTouch());
          setTimeout(() => {
            dispatch(resetName());
          }, 1000);
        };
      };
