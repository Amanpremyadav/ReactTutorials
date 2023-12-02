import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const[text, setText] = useState('');

  // variation1 Every render
  // useEffect (()=>{
  //   console.log('UI Rendering on Every Render');
  // })

  // variation2 On first render only
  // useEffect (()=>{
  //     console.log('UI Rendering On First Render only')
  // },[]);

  // variation3 On first render + whenever dependencies change
  //  useEffect (()=>{
  //      console.log('UI Rendering on First Render + whenever dependencies change');
  //  },[text]);

  // variation4 To Handle unmounting of the component
      useEffect (()=>{
         console.log('Added');

         return ()=>{
          console.log('Removed');
         }
      },[text]);

  function changeHandler(event) {
        setText(event.target.value);
        console.log(text);
  };
  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
