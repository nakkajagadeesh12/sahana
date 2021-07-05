import React from "react";
import "./form.css";

function Form({ formData, setFormData }) {
  const {
    name,
    emailID,
    mobileNo,
    gender,
    address1,
    address2,
    city,
    state,
    pincode,
    country,
  } = formData;

  const updateData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <div className="form-container">
        <div>
          <input
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Mail Id"
            name="emailID"
            value={emailID}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Mobile No"
            name="mobileNo"
            value={mobileNo}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <select name="gender" id="gender" onChange={(e) => updateData(e)}>
            <option>Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <input
            placeholder="Enter Address1"
            name="address1"
            value={address1}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Address2"
            name="address2"
            value={address2}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter City"
            name="city"
            value={city}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter State"
            name="state"
            value={state}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Pincode"
            name="pincode"
            value={pincode}
            onChange={(e) => updateData(e)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Country"
            name="country"
            value={country}
            onChange={(e) => updateData(e)}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
