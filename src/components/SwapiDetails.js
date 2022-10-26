import React from 'react';

const SwapiDetails = (props) => {
    
    const { data, displayError } = props
    const nombresYValores = () =>{
        if(data){
            console.log("this is the data",data)
            return Object.keys(data).slice(0,4).map((key,index)=>{
                return<li key={index}> {key} : {data[key]}</li>
            })
        }
    }
    return (
        
        <div>
            {displayError?
            <>
            <h3>Estos no son los droides que está buscando</h3>
            <img src='https://media2.giphy.com/media/l2JJKs3I69qfaQleE/giphy.gif' 
                alt="obi wan dice: Estos no son los droides que está buscando"></img>
            </>:
            nombresYValores()}

        </div>
    );
}

export default SwapiDetails;
