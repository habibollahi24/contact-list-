import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ContactListForm from "../components/ContactListForm";
import ContactListItems from "../components/ContactListItems";
import SubNavbar from "../components/SubNavbar";
import ContactDetails from "../components/ContactDetails";
import { getContacts } from "../services/getContactService";
import { postContacts } from "../services/postContacts";
import { deleteOneContact } from "../services/deleteContact";
import { putContact } from "../services/putContact";
import Search from "../components/Search";

const ContactList = () => {
  const [ctxList, setCtxList] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setCtxList(data.reverse());
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const addContact = (post) => {
    const postData = async () => {
      const { data } = await postContacts(post);
      setCtxList([...ctxList, data].reverse());
    };
    try {
      postData();
    } catch (error) {}
  };

  const deleteContact = (id) => {
    const deletePost = async () => {
      await deleteOneContact(id);
      const filteredContact = ctxList.filter((item) => item.id !== id);
      setCtxList(filteredContact);
    };
    try {
      deletePost();
    } catch (error) {}
  };

  const editContactById = (data, id) => {
    const changeOneContact = async () => {
      await putContact(id, data);
      const editedData = ctxList.map((contact) => {
        if (contact.id === id) {
          return { ...contact, username: data.username, email: data.email };
        } else {
          return contact;
        }
      });
      setCtxList(editedData);
    };
    try {
      changeOneContact();
    } catch (error) {}
  };

  return (
    <div>
      <SubNavbar />
      <div className=" container mx-auto p-1 flex flex-col md:flex-row   max-w-screen-xl">
        <Switch>
          <Route path="/contacts/:id" component={(props) => <ContactDetails contacts={ctxList} {...props} />} />
          <Route
            path="/contacts"
            render={(props) => {
              return (
                <>
                  <ContactListItems listData={ctxList} onDelete={deleteContact} editContact={editContactById} {...props} />
                  <Search contacts={ctxList} setContacts={setCtxList} />
                </>
              );
            }}
          />

          <Route
            exact
            path="/"
            render={(props) => {
              return (
                <>
                  <ContactListForm sendData={addContact} {...props} />
                  <ContactListItems listData={ctxList} onDelete={deleteContact} editContact={editContactById} {...props} />
                </>
              );
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default ContactList;
