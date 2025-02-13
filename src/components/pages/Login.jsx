import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import axios from "axios";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Breadcrumb from "../Breadcrumb";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BallTriangle } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth();
  let [eye, setEye] = useState(false);
  let [loader, setLoader] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let navigate = useNavigate();

  let changeEmail = (e) => {
    setEmail(e.target.value);
    setErrorMsg("");
  };

  let changePassword = (e) => {
    setPassword(e.target.value);
    setErrorMsg("");
  };

  let submit = () => {
    if (!email || !password) {
      setErrorMsg("Invalid email or password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setEmail("");
        setPassword("");
        setLoader(false);
        toast.success("Welcome");
        setTimeout(() => {
          navigate("/my_account");
        }, 1000);
      })
      .catch(() => {
        setErrorMsg("Invalid email or password");
      });
  };

  return (
    <div className="py-[80px] bg-white overflow-hidden">
      <ToastContainer position="top-right" autoClose={5000} />
      <Container>
        <div className="border-b pb-20 ">
          <Heading as="h3" text="Login" className="font-dm font-bold text-[40px] " />
          <Breadcrumb />
        </div>
        <div className="border-b pb-5">
          <Heading as="h3" text="Returning Customer" className="font-dm font-bold text-[32px] lg:text-[40px]  " />
          <Flex className="gap-x-6 flex-col lg:flex-row">
            <div className="pt-[50px] relative">
              <label><b className="pl-3">Email address</b></label><br />
              <input value={email} onChange={changeEmail} type="email" className="border p-3 w-[300px]" placeholder="Email address" />
            </div>
            <div className="pt-[50px] ">
              <label><b className="pl-3">Password</b></label><br />
              <div className="relative w-[300px]">
                <input value={password} onChange={changePassword} type={eye ? "text" : "password"} className="border p-3 w-full" placeholder="Enter Password" />
                {eye ? (
                  <IoIosEye onClick={() => setEye(!eye)} className="absolute top-[50%] right-2" />
                ) : (
                  <IoIosEyeOff onClick={() => setEye(!eye)} className="absolute top-[50%] right-2" />
                )}
              </div>
            </div>
          </Flex>
          {errorMsg && <p className="text-red-600 font-bold mt-2">{errorMsg}</p>}
        </div>
        {loader ? (
          <BallTriangle height={100} width={100} color="#4fa94d" />
        ) : (
          <Button onClick={submit} btnText="Login" className="mt-6" />
        )}
      </Container>
    </div>
  );
};

export default Login;
