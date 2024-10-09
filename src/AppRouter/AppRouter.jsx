import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllTables from "../pages/AllTables/AllTables";
import Addinfo from "../pages/AddInfo/Addinfo";
import AllProducts from "../pages/AllProducts/AllProducts";
import AllUsers from "../pages/AllUsers/AllUsers";
import AddProducts from "../pages/AddProducts/AddProducts";
import AddUsers from "../pages/AddUsers/AddUsers";
import Layout from "../Layout/Layout";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import IsDelete from "../Components/IsDelete/IsDelete";
import IsProductDelete from "../Components/IsProductDelete/IsProductDelete";
import IsUpdate from "../Components/IsUpdate/IsUpdate";
import IsProductUpdate from "../Components/IsProductUpdate/IsProductUpdate";
import NotFound from "../Components/NotFound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AppRouter() {
  const [usersData, setUsersData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [image, setImage] = useState(null);
  const [isDeleted, setIsDeleted] = useState({
    userId: "",
    productId: "",
    isDeleted: false,
    isProductDeleted: false,
  });
  const [isUpdate, setIsUpdate] = useState({
    userId: "",
    productId: "",
    isUpdate: false,
    isProductUpdate: false,
  });

  const handleDeleteNotify = (whatToDelete) => {
    toast(`🗑️ ${whatToDelete} has been deleted`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  const handleUpdateNotify = (whatToUpdate) => {
    toast.success(`${whatToUpdate} updated successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  const handleSuccessNotify = (whatToCreate) => {
    toast.success(`${whatToCreate} created successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitUsers = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      fname: e.target[0].value,
      sname: e.target[1].value,
      userAge: e.target[2].value,
      userCompany: e.target[3].value,
      userStatus: e.target[4].value,
      userImage: image,
    };
    setUsersData([...usersData, newUser]);
    e.target.reset();
    setImage(null);
    handleSuccessNotify('User')
  };
  const handleSubmitUpdateUsers = (e, userId) => {
    e.preventDefault();
    const updatedUser = {
      id: userId,
      fname: e.target[0].value,
      sname: e.target[1].value,
      userAge: e.target[2].value,
      userCompany: e.target[3].value,
      userStatus: e.target[4].value,
      userImage:
        image || usersData.find((user) => user.id === userId).userImage,
    };
    setUsersData(
      usersData.map((user) => (user.id === userId ? updatedUser : user))
    );
    setImage(null);
    setIsUpdate({
      userId: "",
      productId: "",
      isUpdate: false,
      isProductUpdate: false,
    });
    handleUpdateNotify("User")
  };

  const handleSubmitProducts = (e) => {
    e.preventDefault();
    console.log(e.target);
    const newProduct = {
      id: new Date().getTime().toString(),
      pname: e.target[0].value,
      productCategory: e.target[1].value,
      productPrice: e.target[2].value,
      brandName: e.target[3].value,
      productStatus: e.target[4].value,
      productImage: image,
    };
    setProductsData([...productsData, newProduct]);
    e.target.reset();
    handleSuccessNotify("Product")
  };
  const handleSubmitUpdateProducts = (e, productId) => {
    e.preventDefault();
    const updatedProduct = {
      id: productId,
      pname: e.target[0].value,
      productCategory: e.target[1].value,
      productPrice: e.target[2].value,
      brandName: e.target[3].value,
      productStatus: e.target[4].value,
      productImage:
        image ||
        productsData.find((product) => product.id === productId).productImage,
    };
    setProductsData(
      productsData.map((product) =>
        product.id === productId ? updatedProduct : product
      )
    );
    setImage(null);
    setIsUpdate({
      userId: "",
      productId: "",
      isUpdate: false,
      isProductUpdate: false,
    });
    handleUpdateNotify("Product");
  };

  const handleIsDeleted = (userId, productId) => {
    setIsDeleted({
      userId: userId,
      productId: productId,
      isDeleted: userId !== "",
      isProductDeleted: productId !== "",
    });
  };
  const handleIsUpdate = (userId, productId) => {
    setIsUpdate({
      userId: userId,
      productId: productId,
      isUpdate: userId !== "",
      isProductUpdate: productId !== "",
    });
  };

  const handleCancel = () => {
    setIsDeleted({
      userId: "",
      productId: "",
      isDeleted: false,
      isProductDeleted: false,
    });
  };
  const handleUpdateCancel = () => {
    setIsUpdate({
      userId: "",
      productId: "",
      isUpdate: false,
      isProductUpdate: false,
    });
  };

  const handleUserDelete = () => {
    const newUsers = usersData.filter((user) => user.id !== isDeleted.userId);
    setUsersData(newUsers);
    setIsDeleted({
      userId: "",
      productId: "",
      isDeleted: false,
      isProductDeleted: false,
    });
    handleDeleteNotify('User');
  };

  const handleProductDelete = () => {
    const newProducts = productsData.filter(
      (product) => product.id !== isDeleted.productId
    );
    setProductsData(newProducts);
    setIsDeleted({
      userId: "",
      productId: "",
      isDeleted: false,
      isProductDeleted: false,
    });
    handleDeleteNotify('Product')
  };

  return (
    <>
    <ToastContainer />
      {isDeleted.isDeleted ? (
        <IsDelete
          handleCancel={handleCancel}
          handleUserDelete={handleUserDelete}
        />
      ) : null}
      {isDeleted.isProductDeleted ? (
        <IsProductDelete
          handleCancel={handleCancel}
          handleProductDelete={handleProductDelete}
        />
      ) : null}
      {isUpdate.isUpdate ? (
        <IsUpdate
          isUpdate={isUpdate}
          usersData={usersData}
          handleImage={handleImage}
          handleUpdateCancel={handleUpdateCancel}
          handleSubmitUpdateUsers={handleSubmitUpdateUsers}
        />
      ) : null}
      {isUpdate.isProductUpdate ? (
        <IsProductUpdate
          isUpdate={isUpdate}
          productsData={productsData}
          handleImage={handleImage}
          handleUpdateCancel={handleUpdateCancel}
          handleSubmitUpdateProducts={handleSubmitUpdateProducts}
        />
      ) : null}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="alltables" element={<AllTables />}>
            <Route index element={<NotFound />}/>
            <Route
              path="allproducts"
              element={
                <AllProducts
                  productsData={productsData}
                  handleIsDeleted={handleIsDeleted}
                  handleIsUpdate={handleIsUpdate}
                />
              }
            />
            <Route
              path="allusers"
              element={
                <AllUsers
                  usersData={usersData}
                  handleIsDeleted={handleIsDeleted}
                  handleIsUpdate={handleIsUpdate}
                  setUsersData={setUsersData}
                />
              }
            />
          </Route>
          <Route path="addinfo" element={<Addinfo />}>
          <Route index element={<NotFound />}/>
            <Route
              path="addproducts"
              element={
                <AddProducts
                  productsData={productsData}
                  setProductsData={setProductsData}
                  handleSubmitProducts={handleSubmitProducts}
                />
              }
            />
            <Route
              path="addusers"
              element={
                <AddUsers
                  usersData={usersData}
                  setUsersData={setUsersData}
                  handleSubmitUsers={handleSubmitUsers}
                  handleImage={handleImage}
                />
              }
            />
          </Route>
          <Route index element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
}
