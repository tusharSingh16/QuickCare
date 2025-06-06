import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (loginState === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[75vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[320px] sm:min-w-96 border rounded-lg text-gray-600 text-sm shadow-lg ">
        <p className="text-2xl font-semibold ">
          {loginState == "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {loginState == "Sign Up" ? "Create Account" : "Login"} to book
          appointment
        </p>
        {loginState === "Sign Up" && (
          <div className="w-full">
            <p>Full name</p>
            <input
              required
              className="border border-gray-500 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            required
            className="border border-gray-500 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            required
            className="border border-gray-500 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white w-full py-2 rounded-lg text-base">
          {loginState == "Sign Up" ? "Create Account" : "Login"}
        </button>
        {loginState == "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setLoginState("Login")}
              className="text-primary underline cursor-pointer">
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setLoginState("Sign Up")}
              className="text-primary underline cursor-pointer">
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
