import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AddTransactions from "./views/AddTransactions/Add-Transactions";
import Home from './../src/views/Home/Home';
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";
import MyTransaction from "./views/MyTransactions/MyTransactions";
import UpdateTransaction from "./views/UpdateTransaction/UpdateTransaction";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
      path:'/',
      element:<Home/>
  },
  {
      path:'/login',
      element:<Login/>
  },
  {
      path:'/signup',
      element:<SignUp/>
  },
  {
    path:'/add-transactions',
    element:<AddTransactions/>
  },
  {
      path:'/my-transactions',
      element:<MyTransaction/>
  },
  {
    path:'/updateTransaction/:id',
    element:<UpdateTransaction/>
  }

])
root.render(
    <>
    <RouterProvider router = {router} />
    
    </>
);


