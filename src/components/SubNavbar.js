import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const SubNavbar = () => {
  return (
    <div className="bg-slate-100 shadow-sm">
      <div className="container mx-auto p-2  max-w-screen-xl   font-semibold  flex items-center  ">
        <NavLink className="text-gray-600 hover:text-gray-400" activeClassName="active-nav" exact to="/">
          Home
        </NavLink>
        <HiOutlineChevronRight className="mx-2" />
        <NavLink className="text-gray-600 hover:text-gray-400" activeClassName="active-nav" to="/contacts">
          MyContacts
        </NavLink>
      </div>
    </div>
  );
};

export default SubNavbar;
