import React from 'react';

const FaceCard = ({ id, name, email, city}) => {
    return (
        <div className='tc bgcolor dib br4 pa3 ma4 grow bw3 shadow-3 '>
            <img src={`https://robohash.org/${id}?set=set4`} height='250px' width='200px' alt="kitty" />
            <div>
                <h2 className='f3'>{name}</h2>
                <p className='f4'>{email} </p>
                <p className='f4'>{city} </p>
               
            </div>
        </div>
    )
}
export default FaceCard;
