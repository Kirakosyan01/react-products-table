import React from "react";
import PageTransition from "../../PageTransition/PageTransition";

export default function AddUsers({ usersData, setUsersData, handleSubmitUsers, handleImage }) {
  return (
    <PageTransition>
    <div className="my-8">
      <div>
        <form onSubmit={handleSubmitUsers} className="flex flex-col gap-y-2">
          <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="First Name" required/>
          <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Second Name" required/>
          <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Age" required/>
          <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Company" required/>
          <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Status" required/>
          <label className="text-slate-500">User image:</label>
          <input className="bg-slate-100 px-4 py-2 rounded-md mb-4" onChange={handleImage} type="file" accept="image/*"/>
          <hr />
          <button className='bg-indigo-700 text-white max-w-32 py-2 rounded-md my-4 hover:bg-indigo-500'>Add User</button>
        </form>
      </div>
    </div>
    </PageTransition>
  );
}
