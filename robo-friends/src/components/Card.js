import React from 'react';
import './Card.css'

const Card =({id,name,email})=> {

    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>

            <h1>I'm a robot</h1>
            <img alt='robot' src={`https://robohash.org/${id}?size=200x200`}></img>
            <p>name : {name}</p>
            <p>emai : {email}</p>
      
        </div>
    )
    
   

}

export default Card;