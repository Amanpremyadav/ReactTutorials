import logo from './logo.svg';
import './App.css';
import { Children, useState } from 'react';

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", 
                                             comments: "", isVisible: true, favCar:"" });
  console.log(formData);
  function changeHandler(event) {
    const { name, type, value, checked } = event.target;
    setFormData(prevData => {
      return {
        ...prevData, [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing the entire form data.....");
    console.log(formData);
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='First Name' onChange={changeHandler}
          name='firstName' value={formData.firstName} />
        <br /> <br />

        <input type='text' placeholder='Last Name' onChange={changeHandler}
          name='lastName' value={formData.lastName} />
        <br /> <br />

        <input type='email' placeholder='Email' onChange={changeHandler} name='email' value={formData.email} />
        <br /> <br />

        <textarea placeholder='comments' onChange={changeHandler} name='comments' value={formData.comments} />
        <br /> <br />

        <input type='checkbox' onChange={changeHandler} name='isVisible'
          checked={formData.isVisible} id='isVisible' />
        <label htmlFor='isVisible'>Am i visible ?</label>
        <br /> <br />


        <fieldset>
          <legend>Mode:</legend>
          <input type='radio' onChange={changeHandler} name='mode'
            value='Online-mode' id="Online-mode" checked={formData.mode === 'Online-mode'} />
          <label htmlFor='Online-mode'>Online Mode</label>

          <input type='radio' onChange={changeHandler} name='mode'
            value='Offline-mode' id="Offline-mode" checked={formData.mode === 'Offline-mode'}  />
          <label htmlFor='Offline-mode'>Offline Mode</label>
        </fieldset>
        <br/>

        <label htmlFor='favCar'>Tell me you favourite Car </label>
        <select id='favCar'
        value={formData.favCar}
        name='favCar'
        onChange={changeHandler}
        >

        <option value='Fortuner'>Fortuner</option> 
        <option value='Thar'>Thar</option>
        <option value='Scorpio'>Scorpio</option>
        <option value='Toyota'>Toyota</option>
        <option value='Ford'>Ford</option> 
      
        </select>
        <br/> <br/>
        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
