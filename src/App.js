import logo from './logo.svg';
import './App.css';
import MealList from './MealList';
import details from './details';
import MealItem from './MealItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './details';



function App() {

 
  return (
   
    <div style={{justifyItems:"center", justifyContent:"center"}} className='conatainer'  >
    <Routes>
      <Route path='/' element={ <MealList/>}/>
      <Route path='/:MealId'    element={<Details/>}/>
    </Routes>
    </div>


  
  );
}

export default App;
