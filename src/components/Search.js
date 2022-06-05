import React, { useState, useEffect } from "react";

const Search = ({ contacts, setContacts }) => {
  const [allContacts, setAllContacts] = useState(null); //استیت کمکی
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    setAllContacts(contacts);
  }, []);

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    if (e.target.value !== "") {
      const filteredBySearch = allContacts.filter((contact) => {
        return Object.values(contact).join(" ").toLowerCase().includes(e.target.value.toLowerCase());
      });
      setContacts(filteredBySearch);
    } else {
      setContacts(allContacts);
    }
  };
  return (
    <div className="px-1 py-4 w-full md:w-1/2 md:flex md:justify-center order-2 ">
      <div>
        <h3 className="text-2xl font-semibold text-gray-600 mb-4">Search :</h3>
        <input value={searchItem} onChange={changeHandler} type="text" className="input-control w-full" placeholder="Find Your Contacts ..." />
      </div>
    </div>
  );
};

export default Search;
