import React from "react";
import "./App.css";
import data from "./users.json";
import Form from "./form.js";

function App() {
  const [datas, setDatas] = React.useState([]);
  const [userData] = React.useState(data.usersDetails);
  const [searchData, setSearchData] = React.useState();
  const [userDetails, setUserDetails] = React.useState({});
  const [searchUser, setSearchUser] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    emailID: "",
    mobileNo: "",
    gender: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const getUserDetails = (userName) => {
    let newData = JSON.parse(
      JSON.stringify(datas.length > 0 ? datas : userData)
    );
    setUserDetails(newData.filter((data) => data.name === userName)[0]);
  };

  const addData = () => {
    setFlag(true);
  };

  const addUserData = () => {
    setFlag(false);
    if (datas.length > 0) {
      setDatas([...datas, formData]);
    } else {
      setDatas([...userData, formData]);
    }
  };

  const deleteData = () => {
    let newData = JSON.parse(
      JSON.stringify(datas.length > 0 ? datas : userData)
    );
    let updatedData = newData.filter((data) => data.name !== userDetails.name);
    setDatas(updatedData);
    setUserDetails({});
  };

  React.useEffect(() => {
    let newData = JSON.parse(
      JSON.stringify(datas.length > 0 ? datas : userData)
    );
    setSearchData(newData.filter((data) => data.name.includes(searchUser)));
  }, [searchUser]);

  return (
    <div className="container">
      <div className="users-Section">
        {Object.keys(userDetails).length > 0 && (
          <div>
            <div className="delete-container" onClick={() => deleteData()}>
              Delete
            </div>
          </div>
        )}
        <div className="inputBox">
          <input
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
            placeholder="Search By Name"
          />
        </div>
        <div className="usrList">
          {(searchUser ? searchData : datas.length > 0 ? datas : userData).map(
            (user) => (
              <button
                className="usrName"
                onClick={() => getUserDetails(user.name)}
              >
                {user.name}
              </button>
            )
          )}
        </div>
        <div>
          <div className="add-container" onClick={() => addData()}>
            Add User
          </div>
        </div>
        {flag && (
          <div className="user-form-container">
            <div className="user-form-block">
              <div>
                <h2>Enter Details</h2>
              </div>
              <Form formData={formData} setFormData={setFormData} />
              <div className="form-button">
                <button onClick={() => addUserData()}>Submit</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="userDetail-Section">
        {userDetails && (
          <div className="details">
            {Object.keys(userDetails).map((key) => (
              <div>
                <div style={{ fontWeight: "bold" }}>{key.toUpperCase()}</div>
                <div>{userDetails[key]}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
