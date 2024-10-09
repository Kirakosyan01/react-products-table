import React from "react";

export default function IsProductDelete({ handleCancel, handleProductDelete }) {
  return (
    <div className="absolute bg-black min-h-screen">
      <div className="fixed inset-0 flex justify-center py-28 bg-black bg-opacity-50 z-50">
        <div className="bg-white flex flex-col justify-between py-4 px-4 w-96 h-60 rounded-md">
          <div>
            <div className="text-2xl font-semibold mb-3">
              You are about to delete a product
            </div>
            <div className="text-gray-500 text-lg">
              This will delete this product from catalog
            </div>
            <div className="text-gray-500 text-lg">Are you sure?</div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={handleCancel}
              className="bg-gray-600 px-3 py-1 rounded-md text-white hover:bg-gray-700 mt-4 duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleProductDelete}
              className="bg-rose-300 px-3 py-1 rounded-md text-white hover:bg-rose-600 mt-4 duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
