import React from 'react';
import Card from './Card'



const CardList =({robots})=>{
            

            const robotArray = robots.map(robot=>{ return robot.name;}
               
                )

                console.log(robotArray);
                



            return(

               
                robots.map(robot=>{
                    
                    return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email}/>}
               
                    )

            )



}

export default CardList;