import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ModalTransition from "../../PageTransition/ModalTransition";

export default function Addinfo() {
  return (
    <ModalTransition>
    <div className="flex pb-4 w-full justify-center flex-col items-center">
      <div className="bg-zinc-800 max-w-64 py-4 px-5 rounded-lg sticky top-20 z-10">
        <NavLink
          className={({ isActive }) =>
            ` px-3 py-1.5 mr-2 rounded-md text-white ${
              isActive ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-blue-500"
            }`
          }
          to="addproducts"
        >
          Add Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-md text-white ${
              isActive ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-blue-500"
            }`
          }
          to="addusers"
        >
          Add User
        </NavLink>
      </div>
      <Outlet />
    </div>
    </ModalTransition>
  );
}
