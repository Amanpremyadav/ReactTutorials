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
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label> <br />
      <input type="text" name="firstName" id="firstName" placeholder="Enter your first name"
        value={formData.firstName} onChange={changeHandler} className="outline" />

      <br />
      <label htmlFor="lastName">lastName</label> <br />
      <input type="text" name="lastName" id="lastName" placeholder="Enter your last name"
        value={formData.lastName} onChange={changeHandler} className="outline" />

      <br />
      <label htmlFor="email">Email Address</label> <br />
      <input type="email" name="email" id="email" placeholder="Enter your email"
        value={formData.email} onChange={changeHandler} className="outline" />

      <br />
      <label htmlFor="country">Country</label>
      <br />
      <select id="country" name="country" value={formData.country} className="outline">
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="mexico">Mexico</option>
        <option value="germany">Germany</option>
        <option value="France">France</option>
      </select>

      <br />
      <label htmlFor="streetAddress">Street Address</label> <br />
      <input type="text" name="streetAddress" id="streetAddress" placeholder="Enter your street address"
        value={formData.streetAddress} onChange={changeHandler} className="outline" />

      <br />
      <label htmlFor="city">City</label> <br />
      <input type="text" name="city" id="city" placeholder="Enter your city"
        value={formData.city} onChange={changeHandler} className="outline" />

      <br />
      <label htmlFor="state">State / Province</label> <br />
      <input type="text" name="state" id="state" placeholder="Enter your state"
        value={formData.state} onChange={changeHandler} className="outline" />

      <br />
      <label htmlFor="p ostalCode">Postal Code</label> <br />
      <input type="text" name="postalCode" id="postalCode" placeholder="Enter your postal code"
        value={formData.postalCode} onChange={changeHandler} className="outline" />

      <br/> <br/>
      <fieldset>
        <legend>By Email</legend>
        <div className="flex">
          <input type="checkbox" id="comments" name="comments"
            checked={formData.comments} onChange={changeHandler} />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someone posts a comment on a posting</p>
          </div>
        </div>

        <div className="flex">
          <input type="checkbox" id="candidates" name="candidates"
            checked={formData.candidates} onChange={changeHandler} />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job</p>
          </div>
        </div>

        <div className="flex">
          <input type="checkbox" id="offers" name="offers"
            checked={formData.offers} onChange={changeHandler} />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offer</p>
          </div>
        </div>

      </fieldset>

      <br />
      <fieldset>
        <legend> Push Notifications </legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <input type="radio" id="pushEverything" name="pushNotifications" value="Everything"
          onChange={changeHandler} />
        <label htmlFor="pushEverything">Everything</label>

        <br />
        <input type="radio" id="pushEmail" name="pushNotifications" value="Same as email"
          onChange={changeHandler} />
        <label htmlFor="pushEmail">Same as email</label>

        <br />
        <input type="radio" id="pushNothing" name="pushNotifications" value="No Push Notification"
          onChange={changeHandler} />
        <label htmlFor="pushNothing">No Push Notification</label>
      </fieldset>

      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4">Save</button>
    </form>
  </div>;
};

export default App;
