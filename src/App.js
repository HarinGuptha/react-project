import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './component/routing/RootLayout';
import Home from './component/routing/Home';
import Login from './component/routing/Login';
import Register from './component/routing/Register';
import Userprofile from './component/routing/Userprofile'
import RoutingError  from './component/routing/RoutingError';
import Aboutus from './component/routing/Aboutus';
function App() {
  const browserRouterObject = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement:<RoutingError/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        { path:"userprofile/:username",element:<Userprofile/>},
        {
          path:"Aboutus",
          element:<Aboutus/>
        }
      ],
    },
  ]);
  return <RouterProvider router={browserRouterObject} />;
}
export default App;




