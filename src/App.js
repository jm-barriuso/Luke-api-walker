
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Swapi from './components/Swapi';
import SwapiDetails from './components/SwapiDetails';
import SwapidetailsId from './components/SwapidetailsId';

function App() {


  const [selectedResource, setSelectedResource] = useState("people");
    const [selectedId, setSelectedId] = useState("");
    const [displayError, setDisplayError] = useState(false);
    const [selectedItem, setSelectedItem] = useState();
    const [selectedPlanet,setSelectedPlanet] = useState();


  return (
    <div className="App">
      <Swapi 
      selectedResource={selectedResource}
      setSelectedResource={setSelectedResource} 
      selectedId={selectedId}
      setSelectedId={setSelectedId}
      displayError={displayError}
      setDisplayError={setDisplayError}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      />
      <Routes>
        
        <Route path="/" element={
          <SwapiDetails 
          data={selectedItem} 
          displayError={displayError}
          />
        }/>
          <Route path="/:id" element={
            <SwapidetailsId
            data={selectedItem}
            setSelectedItem={setSelectedItem}
            displayError={displayError}
            setDisplayError={setDisplayError}
            selectedPlanet={selectedPlanet}
            setSelectedPlanet={setSelectedPlanet}/>
          }/>
      </Routes>

    </div>
  );
}

export default App;
