import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "india",
    streetAddress: "", city: "", state: "", postalCode: "", comments: false,
    candidates: false, offers: false, pushNotifications: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData, [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of the form data....  ")
    console.log(formData);
  }
  return <div className="flex flex-col items-center">
    <form onSubmit={submitHandler} className="md:w-1/2 md:max-w-[1000px] rounded-md p-[30px]
     mx-auto flex flex-col gap-2 shadow-md">

      <div>
        <label htmlFor="firstName" className='font-medium text-sm'>First Name</label> <br />

        <input type="text" name="firstName" id="firstName" placeholder="Enter your first name"
          value={formData.firstName} onChange={changeHandler} className="outline w-full border border-blue-400 
  rounded-md p-2 mt-2" />
      </div>

      <div>
        <label htmlFor="lastName" className='font-medium text-sm'>lastName</label> <br />
        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name"
          value={formData.lastName} onChange={changeHandler} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2" />

      </div>

      <div>
        <label htmlFor="email" className='font-medium text-sm'>Email Address</label> <br />
        <input type="email" name="email" id="email" placeholder="Enter your email"
          value={formData.email} onChange={changeHandler} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2" />
      </div>

      <div>
        <label htmlFor="country" className='font-medium text-sm'>Country</label>
        <select id="country" name="country" value={formData.country} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2">
          <option value="india">India</option>
          <option value="usa">USA</option>
          <option value="mexico">Mexico</option>
          <option value="germany">Germany</option>
          <option value="France">France</option>
        </select>
      </div>

      <div>
        <label htmlFor="streetAddress" className='font-medium text-sm'>Street Address</label> <br />
        <input type="text" name="streetAddress" id="streetAddress" placeholder="Enter your street address"
          value={formData.streetAddress} onChange={changeHandler} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2" />
      </div>

      <div>
        <label htmlFor="city" className='font-medium text-sm' >City</label> <br />
        <input type="text" name="city" id="city" placeholder="Enter your city"
          value={formData.city} onChange={changeHandler} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2" />
      </div>

      <div>
        <label htmlFor="state" className='font-medium text-sm'>State / Province</label> <br />
        <input type="text" name="state" id="state" placeholder="Enter your state"
          value={formData.state} onChange={changeHandler} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2"/>
      </div>

      <div>
        <label htmlFor="p ostalCode" className='font-medium text-sm'>Postal Code</label> <br />
        <input type="text" name="postalCode" id="postalCode" placeholder="Enter your postal code"
          value={formData.postalCode} onChange={changeHandler} className="outline w-full border border-blue-400
         rounded-md p-2 mt-2" />
      </div>


      <fieldset className='mb-4'>
        <legend className='font-medium text-sm'>By Email</legend>
        <div className='flex items-start gap-4 mt-2'>
        <div>
        <input type="checkbox" id="comments" name="comments"
            checked={formData.comments} onChange={changeHandler} />
        </div>
          
          <div>
            <label htmlFor="comments" className='font-medium text-sm'>Comments</label>
            <p className='text-sm text-gray-500'>Get notified when someone posts a comment on a posting</p>
          </div>
        </div>

        <div className='flex items-start gap-4 mt-2'>
        <div>
        <input type="checkbox" id="candidates" name="candidates"
            checked={formData.candidates} onChange={changeHandler} />
        </div>
          
          <div>
            <label htmlFor="candidates" className='font-medium text-sm'>Candidates</label>
            <p className='text-sm text-gray-500'>Get notified when a candidate applies for a job</p>
          </div>
        </div>

        <div className='flex items-start gap-4 mt-2'>
        <div>
        <input type="checkbox" id="offers" name="offers"
            checked={formData.offers} onChange={changeHandler} />
        </div>
         
          <div>
            <label htmlFor="offers" className='font-medium text-sm'>Offers</label>
            <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>

      </fieldset>

      <fieldset className='mb-4'>
        <legend className='font-medium text-sm'> Push Notifications </legend>
        <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

<div className='flex gap-4 items-center mt-2'>
<input type="radio" id="pushEverything" name="pushNotifications" value="Everything"
          onChange={changeHandler} />
        <label htmlFor="pushEverything" className='font-medium text-sm'>Everything</label>

</div>
       <div className='flex gap-4 items-center mt-2'>
       <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email"
          onChange={changeHandler} />
        <label htmlFor="pushEmail" className='font-medium text-sm'>Same as email</label>
       </div>
       
<div className='flex gap-4 items-center mt-2'>
<input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notification"
          onChange={changeHandler} />
        <label htmlFor="pushNothing" className='font-medium text-sm'>No Push Notification</label>
</div>
        
      </fieldset>

      <button className='bg-blue-500 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
        transition-all duration-200'>Save</button>
    </form>
  </div>;
};

export default App;
