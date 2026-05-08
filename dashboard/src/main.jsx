import {
  useEffect,
  useState,
} from "react";

import {
  createRoot,
} from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import axios from "axios";

import "./index.css";

import Home from "./components/Home";



const ProtectedHome = () => {

  const [
    isLoading,

    setIsLoading,
  ] = useState(true);



  useEffect(() => {

    const verifyUser =
      async () => {

        try {

          // get URL params
          const params =

            new URLSearchParams(
              window.location.search
            );


          const urlToken =
            params.get(
              "token"
            );


          const userName =
            params.get(
              "name"
            );



          // save token
          if (urlToken) {

            localStorage.setItem(
              "token",
              urlToken
            );



            if (userName) {

              localStorage.setItem(
                "username",
                userName
              );
            }



            window.history.replaceState(
              {},
              document.title,
              "/"
            );
          }



          const token =

            localStorage.getItem(
              "token"
            );



          if (!token) {

            window.location.href =
              "http://localhost:5173/signup";

            return;
          }



          // verify
          await axios.get(

            "http://localhost:3000/verify",

            {
              headers: {
                Authorization:
                  token,
              },
            }
          );



          setIsLoading(
            false
          );

        } catch (error) {

          localStorage.removeItem(
            "token"
          );


          localStorage.removeItem(
            "username"
          );



          window.location.href =
            "http://localhost:5173/signup";
        }
      };



    verifyUser();

  }, []);




  if (isLoading) {

    return (

      <div
        className=
          "auth-loading"
      >

        Verifying session...

      </div>
    );
  }



  return <Home />;
};



createRoot(
  document.getElementById(
    "root"
  )
).render(

  <BrowserRouter>

    <Routes>

      <Route
        path="/*"
        element={
          <ProtectedHome />
        }
      />

    </Routes>

  </BrowserRouter>
);