import React from 'react'
import PageTransition from '../../PageTransition/PageTransition'

export default function AddProducts({ productsData, setProductsData, handleSubmitProducts }) {
  return (
    <PageTransition>
    <div className="my-8">
    <div>
      <form onSubmit={handleSubmitProducts} className="flex flex-col gap-y-2">
        <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Product Name" required/>
        <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Category" required/>
        <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Price" required/>
        <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Brand Name" required/>
        <input className="bg-slate-100 px-4 py-2 rounded-md" type="text" placeholder="Status" required/>
        <label className="text-slate-500">Product image:</label>
        <input className="bg-slate-100 px-4 py-2 rounded-md mb-4" type="file" accept="image/*"/>
        <hr />
        <button className='bg-indigo-700 text-white max-w-32 py-2 rounded-md my-4 hover:bg-indigo-500'>Add Product</button>
      </form>
    </div>
  </div>
    </PageTransition>
  )
}
