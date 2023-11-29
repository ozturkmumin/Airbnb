import React from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <>
      <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64">
          <h1 className="text-4xl text-center mb-4">Register</h1>
          <form className="max-w-md mx-auto">
            <input type="text" placeholder="Mümin Öztürk"/>
            <input type="email" placeholder="your@email.com" />
            <input type="password" placeholder="password" />
            <button className="primary">Register</button>   
            <div className="text-center pt-2 text-gray-500">
             Already a member?
            </div>
            <p className="text-center pb-2">
              {" "}
              <Link  className="underline text-black" to={"/login"}>
               Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
