import React from 'react';
import AskFacePart from '../../components/AskFacePart/AskFacePart';
import Face from '../../components/Face/Face';
import FacePartsNames from '../../components/FacePartsNames/FacePartsNames';

const FaceGame = (props) => {
    return (
        <>
        <AskFacePart />
        <Face />
        <FacePartsNames />
        </>
    )
}

export default FaceGame;
