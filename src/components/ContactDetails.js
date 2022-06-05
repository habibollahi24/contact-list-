import React from "react";

const ContactDetails = (props) => {
  const contact = props.location.state;

  return (
    <div>
      <div className="col-span-1 md:col-span-6">{JSON.stringify(contact)}</div>
    </div>
  );
};

export default ContactDetails;
