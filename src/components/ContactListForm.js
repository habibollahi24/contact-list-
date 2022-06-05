import React, { useState } from "react";

const ContactListForm = ({ sendData, history }) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  const handlerChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.username) {
      return;
    }
    sendData(userData);
    setUserData({ username: "", email: "" });
    // history.push("/contacts");
  };

  return (
    <div className="md:w-1/2 px-1 py-4">
      <form onSubmit={submitHandler} className="space-y-5">
        <h2 className="text-2xl text-gray-700 font-semibold">Contact-Form</h2>
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Name</label>
          <input type="text" className="input-control" value={userData.username} name="username" onChange={handlerChange} />
        </div>
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Email</label>
          <input type="text" className="input-control" value={userData.email} name="email" onChange={handlerChange} />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactListForm;
