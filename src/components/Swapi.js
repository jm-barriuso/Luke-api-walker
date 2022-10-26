import React, { useEffect } from 'react';
import { simpleGet } from '../services/simpleGet';

const Swapi = (props) => {

    const { selectedResource, selectedId, selectedItem,setSelectedResource,setSelectedId,setSelectedItem,setDisplayError} = props

    const getResourceFromServices = async () =>{
        setDisplayError(false)
        const resourceFromServices = await simpleGet(`https://swapi.dev/api/${selectedResource}/${selectedId}`)
        if(resourceFromServices.error === ""){
            return setSelectedItem(resourceFromServices.response.data)
        }else{
            setDisplayError(true);
            }
    }

    useEffect(() => {
        if(selectedItem){
            console.log(selectedItem)
        }
    }, [selectedItem]);



    const onChangeResource = (e) =>{
        setSelectedResource(e.target.value);
    }
    const onChangeId = (e) =>{
        setSelectedId(e.target.value);
    }

    
    
    return (
        <div>
            <div>
                <select name="resource-select" onChange={(e) => onChangeResource(e)}>
                    <option>Elegir Recurso</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="species">Species</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="selected-id">Elegir id</label>
                <input type="text" name="selected-id" onChange= {(e)=> onChangeId(e)} />
                <button onClick={getResourceFromServices}>Search</button>
            </div>
        </div>
        
    );
}

export default Swapi;
