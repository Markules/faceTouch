import * as actionTypes from './actionTypes';

// Set hair action
export const tocuhedHair = () => async (dispatch) => {
  try {
    await dispatch({type: actionTypes.HAIR_TOUCH, name: 'Hair'});
    setTimeout(() => {
      dispatch({type: actionTypes.RESET_NAME});
    }, 1500);
  } catch (err) {
    dispatch({
      type: actionTypes.FACE_ERROR,
      payload: {err},
    });
  }
};

// Set eyes action
export const tocuhedEyes = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.EYES_TOUCH, name: 'Eyes'});
    setTimeout(() => {
      dispatch({type: actionTypes.RESET_NAME});
    }, 1500);
  } catch (err) {
    dispatch({
      type: actionTypes.FACE_ERROR,
      payload: {err},
    });
  }
};

// Set nose action
export const tocuhedNose = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.NOSE_TOUCH, name: 'Nose'});
    setTimeout(() => {
      dispatch({type: actionTypes.RESET_NAME});
    }, 1500);
  } catch {
    dispatch({
      type: actionTypes.FACE_ERROR,
      payload: {err},
    });
  }
};

// Set cheeks action
export const tocuhedCheeks = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.CHEEKS_TOUCH, name: 'Cheeks'});
    setTimeout(() => {
      dispatch({type: actionTypes.RESET_NAME});
    }, 1500);
  } catch {
    dispatch({
      type: actionTypes.FACE_ERROR,
      payload: {err},
    });
  }
};

// Set mouth action
export const tocuhedMouth = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.MOUTH_TOUCH, name: 'Mouth'});
    setTimeout(() => {
      dispatch({type: actionTypes.RESET_NAME});
    }, 1500);
  } catch {
    dispatch({
      type: actionTypes.FACE_ERROR,
      payload: {err},
    });
  }
};

// Set ears action
export const tocuhedEars = () => async (dispatch) => {
  try {
    dispatch({type: actionTypes.EARS_TOUCH, name: 'Ears'});
    setTimeout(() => {
      dispatch({type: actionTypes.RESET_NAME});
    }, 1500);
  } catch {
    dispatch({
      type: actionTypes.FACE_ERROR,
      payload: {err},
    });
  }
};
