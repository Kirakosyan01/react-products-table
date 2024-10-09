import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ModalTransition from "../../PageTransition/ModalTransition";

export default function AllTables() {

  return (
    <ModalTransition>
    <div className="flex pb-4 justify-center flex-col items-center">
      <div className="bg-zinc-800 max-w-64 py-4 px-6 rounded-lg sticky top-20 z-10">
        <NavLink
          className={({ isActive }) =>
            ` px-3 py-1.5 mr-2 rounded-md text-white ${
              isActive ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-blue-500"
            }`
          }
          to="allproducts"
        >
          All Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-md text-white ${
              isActive ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-blue-500"
            }`
          }
          to="allusers"
        >
          All Users
        </NavLink>
      </div>
      <Outlet />
    </div>
    </ModalTransition>
  );
}
