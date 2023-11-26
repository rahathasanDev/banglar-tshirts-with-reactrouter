import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import Main from './Components/Main.jsx';
import OrderReview from './Components/OrderReview.jsx';
import Contact from './Components/Contact.jsx';
import About from './Components/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path:'review',
        element:<OrderReview></OrderReview>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
