import React from "react";

export default function IsProductUpdate({
  isUpdate,
  productsData,
  handleImage,
  handleUpdateCancel,
  handleSubmitUpdateProducts
}) {
  const productToUpdate = productsData.find(
    (product) => product.id === isUpdate.productId
  );
  
  return (
    <div className="absolute bg-black min-h-screen">
      <div className="fixed inset-0 flex justify-center py-28 bg-black bg-opacity-50 z-50">
        <div
          className="bg-white flex items-center py-8 px-8 w-auto rounded-md"
          style={{ height: "600px" }}
        >
          <form onSubmit={(e) => handleSubmitUpdateProducts(e, productToUpdate.id)} className="flex flex-col gap-y-2">
            <label className="text-slate-500">Product :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
                defaultValue={productToUpdate.pname}
              required
            />
            <label className="text-slate-500">Category :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
                defaultValue={productToUpdate.productCategory}
              required
            />
            <label className="text-slate-500">Price :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={productToUpdate.productPrice}
              required
            />
            <label className="text-slate-500">Brand :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={productToUpdate.brandName}
              required
            />
            <label className="text-slate-500">Status :</label>
            <input
              className="bg-slate-100 px-4 py-2 rounded-md"
              type="text"
              defaultValue={productToUpdate.productStatus}
              required
            />
            <label className="text-slate-500">Product image :</label>
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
              <button onClick={handleUpdateCancel} className="bg-rose-300 px-3 py-1 rounded-md text-white hover:bg-rose-600 mt-4 duration-200">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
