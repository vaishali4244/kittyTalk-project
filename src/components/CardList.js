import React from 'react';
import FaceCard from './Card';

 const CardList = ({kitten}) => {
    const CardComponent = kitten.map ((user,i) => {
        return(
            <FaceCard 
            key ={i} 
            id = {kitten[i].id} 
            name = {kitten[i].name} 
            email = {kitten[i].email} 
            city = { kitten[i].city} />
        )
    })
    return (
        <div>
            {CardComponent}
        </div>
    )
 }
export default CardList;