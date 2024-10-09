import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="flex w-full justify-center items-center py-5 bg-zinc-800 text-white my-5 rounded-2xl sticky top-0 z-10">
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded mr-32 duration-200 ${
            isActive ? "bg-indigo-700 hover:bg-indigo-500" : "hover:bg-indigo-500"
          }`
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded mr-2 duration-200 ${
            isActive ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-blue-500"
          }`
        }
        to="alltables"
      >
        All Tables
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `px-4 py-2 rounded duration-200 ${
            isActive ? "bg-blue-700 hover:bg-blue-500" : "hover:bg-blue-500"
          }`
        }
        to="addinfo"
      >
        Add Information
      </NavLink>
    </nav>
  );
}