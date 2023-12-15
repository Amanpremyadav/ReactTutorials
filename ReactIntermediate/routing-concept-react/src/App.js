import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
    <div>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/Labs'}>Labs</NavLink></li>
        <li><NavLink to={'/Support'}>Support</NavLink></li>
        <li><NavLink to={'/About'}>About</NavLink></li>
      </ul>
    </div>
     <Routes>
       <Route path='/' element={<MainHeader/>}>
         {/* Default Route */}
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Support' element={<Support/>}/>
        <Route path='/Labs' element={<Labs/>}/>
        <Route path='*' element={<NotFound/>}/>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
