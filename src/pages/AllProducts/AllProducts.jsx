import React from 'react'
import productDefault from '../../images/default-product.png';
import PageTransition from '../../PageTransition/PageTransition';
import NotFound from '../../Components/NotFound/NotFound';

export default function AllProducts({ productsData, handleIsDeleted, handleIsUpdate }) {
  return (
    <PageTransition>
    {productsData.length > 0 ? null : <NotFound />}
    <div className="mt-16 flex gap-x-8 gap-y-8 flex-wrap justify-center">
      {productsData.map((product) => {
        return (
          <div
            key={product.id}
            className="pb-4 flex flex-col justify-between border rounded-lg border-gray-300 cursor-pointer duration-200 hover:scale-110 max-w-72 overflow-hidden"
          >
            <div>
              <img
                src={product.productImage ? product.productImage : productDefault}
                alt={product.pname}
                width={300}
              />
              <div className="mt-2 text-3xl px-4">
                {product.pname}
              </div>
            </div>
            <div className="px-4">
              <div>
                <span className="text-xl">Price: </span>
                {product.productPrice}
              </div>
              <div>
                <span className="text-xl">Brand: </span>
                {product.brandName}
              </div>
              <div>
                <span className="text-xl">Status: </span>
                {product.productStatus}
              </div>
              <div className="flex justify-center gap-x-2">
                  <button onClick={() => handleIsDeleted("", product.id)} className="bg-rose-300 px-3 py-1 rounded-md text-white hover:bg-rose-600 mt-4 duration-200">
                    Delete
                  </button>
                  <button onClick={() => handleIsUpdate("", product.id)} className="bg-violet-400 px-3 py-1 rounded-md hover:bg-violet-700 text-white mt-4 duration-200">
                    Update
                  </button>
                </div>
            </div>
          </div>
        );
      })}
    </div>
    </PageTransition>
  )
}
