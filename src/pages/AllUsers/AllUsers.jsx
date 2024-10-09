import React from "react";
import userDefault from "../../images/user_default.png";
import PageTransition from "../../PageTransition/PageTransition";
import NotFound from "../../Components/NotFound/NotFound";

export default function AllUsers({ usersData, handleIsDeleted, handleIsUpdate, setUsersData }) {


  return (
    <PageTransition>
      {usersData.length > 0 ? null : <NotFound />}
      <div className="mt-16 pb-2 flex gap-x-8 gap-y-8 flex-wrap justify-center">
        {usersData.map((user) => {
          return (
            <div
              key={user.id}
              className="pb-4 flex flex-col justify-between border rounded-lg border-gray-300 cursor-pointer duration-200 hover:scale-110 max-w-72 overflow-hidden"
            >
              <div>
                <img
                  src={user.userImage ? user.userImage : userDefault}
                  alt={user.fname}
                  width={300}
                />
                <div className="mt-2 text-3xl px-4">
                  {user.fname} {user.sname}
                </div>
              </div>
              <div className="px-4">
                <div>
                  <span className="text-xl">Age: </span>
                  {user.userAge}
                </div>
                <div>
                  <span className="text-xl">Company: </span>
                  {user.userCompany}
                </div>
                <div>
                  <span className="text-xl">Status: </span>
                  {user.userStatus}
                </div>
                <div className="flex justify-center gap-x-2">
                  <button onClick={() => handleIsDeleted(user.id, "")} className="bg-rose-300 px-3 py-1 rounded-md text-white hover:bg-rose-600 mt-4 duration-200">
                    Delete
                  </button>
                  <button onClick={() => handleIsUpdate(user.id, "")} className="bg-violet-400 px-3 py-1 rounded-md hover:bg-violet-700 text-white mt-4 duration-200">
                    Update
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageTransition>
  );
}
