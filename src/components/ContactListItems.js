import React from "react";

import Contact from "./Contact";

const ContactListItems = ({ listData, onDelete, editContact }) => {
  return (
    <>
      <div className="md:w-1/2 space-y-4 px-1 py-4 order-3 md:order-1">
        <p className="text-gray-600 text-2xl font-semibold">All Contacts:</p>
        {listData.length === 0 && <p className="text-center text-red-300 font-bold text-xl">Empty Contact List ...</p>}
        {listData.map((contact) => {
          return <Contact key={contact.id} onDelete={onDelete} contact={contact} editContact={editContact} />;
        })}
      </div>
    </>
  );
};

export default ContactListItems;
