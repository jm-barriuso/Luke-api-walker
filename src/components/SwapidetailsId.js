import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { simpleGet } from '../services/simpleGet';

const SwapidetailsId = (props) => {
    const { id } = useParams();
    const { data, setSelectedItem, setDisplayError, displayError,setSelectedPlanet,selectedPlanet } = props;

    useEffect(() => {
        getResourceFromServices()
    }, []);
    
    const getResourceFromServices = async () =>{
        setDisplayError(false)
        const resourceFromServices = await simpleGet(`https://swapi.dev/api/people/${id}`);
        if(resourceFromServices.error === ""){
            return setSelectedItem(resourceFromServices.response.data)
        }else{
            setDisplayError(true);
            }
    }

    const getPlaneta = async () =>{
        const planetFromServices = await simpleGet(data.homeworld)
        setSelectedPlanet(planetFromServices.response.data.name)
    }

    useEffect(() => {
        if(data){
            getPlaneta();
        }
        
    }, [data]);

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
            <>
            {nombresYValores()}
            <h6>Planeta natal: {selectedPlanet}</h6>
            </>
            }
        </div>
    );
}

export default SwapidetailsId;
