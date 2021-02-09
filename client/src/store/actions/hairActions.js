import * as actionTypes from './actionTypes';

export const hairTouch = () => {
    return {
        type: actionTypes.HAIR_TOUCH,
        name: hair
    }
}

export const tocuhedHair = () => {
    return (dispatch) => {
        dispatch(hairTouch());
    }
}