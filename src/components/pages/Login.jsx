
import React, { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Breadcrumb from "../Breadcrumb";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { BallTriangle } from "react-loader-spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import GoogleAuthButton from "../SignWithgoogle";


const Login = () => {
  let auth = getAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from || "/";

  let [eye, setEye] = useState(false);
  let [loader, setLoader] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [errorMsg, setErrorMsg] = useState("");

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

    setLoader(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        
        if (!user.emailVerified) {
          setLoader(false);
          setErrorMsg("Please verify your email before logging in.");
          toast.error("Please verify your email before logging in.");
          return;
        }

        setEmail("");
        setPassword("");
        setLoader(false);
        toast.success("Login Successful!");
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      })
      .catch(() => {
        setErrorMsg("Invalid email or password");
        setLoader(false);
      });
  };

  return (
    <div className="py-[80px] bg-white overflow-hidden">
      <Container>
        <div className="border-b pb-20 ">
          <Heading as="h3" text="Login" className="font-dm font-bold text-[40px]" />
          <Breadcrumb />
        </div>
        <div className="border-b pb-5">
          <Heading as="h3" text="Returning Customer" className="font-dm font-bold text-[32px] lg:text-[40px]" />
          <Flex className="gap-x-6 flex-col lg:flex-row">
            <div className="pt-[50px] relative">
              <label><b className="pl-3">Email address</b></label><br />
              <input value={email} onChange={changeEmail} type="email" className="outline-none border p-3 w-[300px]" placeholder="Email address" />
            </div>
            <div className="pt-[50px]">
              <label><b className="pl-3">Password</b></label><br />
              <div className="relative w-[300px]">
                <input value={password} onChange={changePassword} type={eye ? "text" : "password"} className="outline-none border p-3 w-full" placeholder="Enter Password" />
                {eye ? (
                  <IoIosEye onClick={() => setEye(!eye)} className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer" />
                ) : (
                  <IoIosEyeOff onClick={() => setEye(!eye)} className="absolute top-[50%] translate-y-[-50%] right-2 cursor-pointer" />
                )}
              </div>
            </div>
          </Flex>
          {errorMsg && <p className="text-red-600 font-bold mt-2">{errorMsg}</p>}
        </div>
        <div className="flex gap-x-10">
        <div>
        {loader ? (
          <BallTriangle height={100} width={100} color="#4fa94d" />
        ) : (
          <Button onClick={submit} btnText="Login" className="mt-6" />
        )}
        </div>
        <div className="mt-6">
        <GoogleAuthButton/>
        </div>
        </div>
        <Heading as="h3" text="New Customer" className="pt-[100px] text-[39px] font-dm font-bold text-navHColor" />
        <Heading as="p" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." className="py-[40px] text-[14px] font-dm font-regular text-navColor pr-[760px]" />
        <Link to="/signup"><Button btnText="Continue" /></Link>
      </Container>
    </div>
  );
};

export default Login;
