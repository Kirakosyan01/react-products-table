import React from "react";

export default function IsUpdate({
  isUpdate,
  usersData,
  handleImage,
  handleUpdateCancel,
  handleSubmitUpdateUsers,
}) {
  const userToUpdate = usersData.find((user) => user.id === isUpdate.userId);

  return (
    <div className="absolute bg-black min-h-screen">
      <div className="fixed inset-0 flex justify-center py-28 bg-black bg-opacity-50 z-50">
        <div
          className="bg-white flex items-center py-8 px-8 w-auto rounded-md"
          style={{ height: "600px" }}
        >
          <form
            onSubmit={(e) => handleSubmitUpdateUsers(e, userToUpdate.id)}
            className="flex flex-col gap-y-2"
          >
            <label className="text-slate-500">First Name :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={userToUpdate.fname}
              required
            />
            <label className="text-slate-500">Second Name :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={userToUpdate.sname}
              required
            />
            <label className="text-slate-500">Age :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={userToUpdate.userAge}
              required
            />
            <label className="text-slate-500">Company :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={userToUpdate.userCompany}
              required
            />
            <label className="text-slate-500">Status :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={userToUpdate.userStatus}
              required
            />
            <label className="text-slate-500">User image :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md mb-4"
              onChange={handleImage}
              type="file"
              accept="image/*"
            />
            <hr />
            <div className="flex justify-center items-center gap-4">
              <button className="bg-gray-600 px-3 py-1 rounded-md text-white hover:bg-gray-700 mt-4 duration-200">
                Update
              </button>
              <button
                onClick={handleUpdateCancel}
                className="bg-rose-300 px-3 py-1 rounded-md text-white hover:bg-rose-600 mt-4 duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
