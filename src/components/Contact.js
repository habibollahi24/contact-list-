import React, { useState, useRef } from "react";
import { HiTrash } from "react-icons/hi";
import { HiUserCircle } from "react-icons/hi";
import { HiPencilAlt, HiCheck, HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
const Contact = ({ onDelete, contact, editContact }) => {
  const [editMode, setEditMode] = useState(false);
  const [userDataEdit, setUserDataEdit] = useState({
    username: contact.username,
    email: contact.email,
  });
  const input = useRef(null);
  const changeHandler = (e, id) => {
    e.preventDefault();
    setUserDataEdit({ ...userDataEdit, [e.target.name]: e.target.value });
    // editContact(userDataEdit, id);
  };

  const { id, username, email } = contact;
  return (
    <div className={`contact-container transition-all duration-100 ${!editMode && "hover:bg-blue-200 group"} `} key={id}>
      <div className="text-lg flex items-center ">
        <div className="text-gray-500 text-[3.5rem] group-hover:!text-white">
          <HiUserCircle />
        </div>
        <div>
          {!editMode ? (
            <>
              <p className="font-semibold  ">{username}</p>
              <p className="text-gray-500 text-base  ">{email}</p>
            </>
          ) : (
            <>
              <input
                type="text"
                onClick={(e) => e.preventDefault()}
                className="w-3/4 caret-blue-500 px-1   outline-none bg-transparent rounded-md text-gray-400"
                onChange={(e) => changeHandler(e, id)}
                value={userDataEdit.username}
                name="username"
                ref={input}
                required
              />
              <input
                type="text"
                onClick={(e) => e.preventDefault()}
                className="w-3/4 caret-blue-500  px-1  outline-none bg-transparent rounded-md text-gray-400"
                onChange={(e) => changeHandler(e, id)}
                value={userDataEdit.email}
                name="email"
                required
              />
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end">
        {editMode && (
          <button
            className="text-green-700 text-2xl  mr-1"
            onClick={(e) => {
              e.preventDefault();
              editContact(userDataEdit, id);
              setEditMode(false);
            }}
          >
            <HiCheck />
          </button>
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setEditMode(!editMode);
            setTimeout(() => {
              if (!editMode) input.current.focus();
            }, 300);
          }}
          className="flex items-center text-2xl text-sky-500 p-1 mr-1 hover:opacity-40 "
        >
          <HiPencilAlt />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
          className="text-red-500 text-2xl cursor-pointer p-1  hover:opacity-40  "
        >
          <HiTrash />
        </button>
        <Link to={{ pathname: `./contacts/${id}`, state: contact }}>
          <div className="text-gray-500 text-xl hover:opacity-40">
            <HiDotsVertical />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
