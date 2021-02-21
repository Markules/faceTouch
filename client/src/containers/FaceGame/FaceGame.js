import React, { useEffect, useState } from 'react';
import AskFacePart from '../../components/AskFacePart/AskFacePart';
import FaceTypeOne from '../../components/Faces/FaceTypeOne/FaceTypeOne';
import FacePartsNames from '../../components/FacePartsNames/FacePartsNames';
import FaceTypeTwo from '../../components/Faces/FaceTypeTwo/FaceTypeTwo';

const FaceGame = (props) => {
    
    const [ faceType, updateFaceType] = useState(null);

    let face = [<FaceTypeOne />, <FaceTypeTwo />]
    
    useEffect(() => {
        const randomFace = face[
            Math.floor(Math.random() * face.length)
          ];
          return updateFaceType(randomFace);
    }, [])

    return (
        <>
        <AskFacePart />
        {faceType}
        <FacePartsNames />
        </>
    )
}

export default FaceGame;
