import logo from './logo.svg';
import './App.css';
import Container from './component/Container';
import Perfil from './component/Perfil';
import { Fragment } from 'react';
import Botons from './component/Botons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Learning from './component/Learning';
import Projects from './component/Projects';
import Logros from './component/Logros';
import Nav from './component/Nav';


function App() {
  return (
    
    
    <Fragment className="App">      
      <BrowserRouter>
        <Nav/>
        <Container/>
        {/* <Perfil/> */}
       
        <Botons/>
        <Routes> 
          <Route path='/home' element={<Perfil/>} />
          <Route path='/learning' element={<Learning/>} />
          <Route path='/proyectos' element={<Projects/>} />
          <Route path='/logros' element={<Logros/>} />
        </Routes>
         
      </BrowserRouter>
      </Fragment>

    
  );
}

export default App;
