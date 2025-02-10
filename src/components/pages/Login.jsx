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
const Sinup = () => {
  const auth = getAuth();
  let [eye, setEye] = useState(false);
  let [eyes, setEyes] = useState(false);
  let [loader, setLoader] = useState(true);
  let [all, setAll] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://restcountries.com/v3.1/all ");
      setAll(data.data);
      //        console.log(data);
    }
    all();
  }, []);

  let navigate = useNavigate();

  // sinup condition
  // First name
  let [name, setName] = useState("");
  let [namerr, setNamerr] = useState("");
  let changeName = (e) => {
    setName(e.target.value);
    setNamerr("");
  };

  // Last Name
  let [namelast, setNamelast] = useState("");
  let [namerrlast, setNamerrlast] = useState("");
  let changeNamelast = (e) => {
    setNamelast(e.target.value);
    setNamerrlast("");
  };
  // Email
  let [email, setEmail] = useState("");
  let [emailrr, setEmailrr] = useState("");
  let changeEmail = (e) => {
    setEmail(e.target.value);
    setEmailrr("");
  };
  // Phone
  let [phone, setPhone] = useState("");
  let [phonerr, setPhonerr] = useState("");
  let changephone = (e) => {
    setPhone(e.target.value);
    setPhonerr("");
  };
  // Address 1
  let [add, setAdd] = useState("");
  let [addrr, setAddrr] = useState("");
  let changeAdd = (e) => {
    setAdd(e.target.value);
    setAddrr("");
  };
  // Address 2
  let [add2, setAdd2] = useState("");
  let [addrr2, setAddrr2] = useState("");
  let changeAdd2 = (e) => {
    setAdd2(e.target.value);
    setAddrr2("");
  };
  // city
  let [city, setCity] = useState("");
  let [cityrr, setCityrr] = useState("");
  let changeCity = (e) => {
    setCity(e.target.value);
    setCityrr("");
  };
  // Password
  let [password, setPassword] = useState("");
  let [passwordrr, setPasswordrr] = useState("");
  let changePassword = (e) => {
    setPassword(e.target.value);
    setConfirmPassword(e.target.value);
    setRepasswordrr("");
    setPasswordrr("");
  };
  // Re-password

  let [confirmPassword, setConfirmPassword] = useState("");
  let [repasswordrr, setRepasswordrr] = useState("");

  let changeRepassword = (e) => {
    setConfirmPassword(e.target.value);
    setRepasswordrr("");
  };

  let submit = () => {
    if (!email) {
      setEmailrr("Email is Requard");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      setEmailrr("You have entered an invalid email address!");
    }

    if (!password) {
      setPasswordrr("Password is Requard");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      setPasswordrr(
        "1 lowercase,1 Upercase,1 special character,1 number & password must be 8 characters or longer is Requard"
      );
    }
    if (password !== confirmPassword) {
      setRepasswordrr("Passwords do not match. Please try again.");
    }
    if (
      email &&
      password &&
      confirmPassword &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
        password
      )
    ) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Login
          const user = userCredential.user;
          setEmail("");
          setPassword("");
          setCity("");
          if (user) {
            setLoader(false);
            toast.success("WellCome My Project");

            setTimeout(() => {
              navigate("/");
            }, 3000);
          }

          console.log(user);
          // ...
        })

        .catch((error) => {
          const errorCode = error.code;

          setEmailrr(errorCode);
          // ..
        });
    }
  };

  return (
    <div className="py-[80px] bg-white overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Container>
        <div className="border-b pb-20 ">
          <Heading
            as={"h3"}
            text={"Login"}
            className="font-dm font-bold text-[40px] "
          />
          <Breadcrumb />
          <Heading
            as={"p"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the."
            }
            className="font-dm font-regular text-[16px] text-navColor lg:pr-[700px] "
          />
        </div>
        <div>
          <div className="border-b pb-5">
            <Heading
              as={"h3"}
              text={"Returning Customer"}
              className="font-dm font-bold text-[32px] lg:text-[40px]  "
            />
            <Flex className={"gap-x-6  flex-col lg:flex-row"}>
              <div className="pt-[50px] relative">
                <label for="uname">
                  <b className="pl-3">Email address</b>
                </label>{" "}
                <br />
                <input
                  value={email}
                  onChange={changeEmail}
                  type="email"
                  className="border border-navColor  p-3 bg-white outline-none w-[300px]"
                  placeholder="Email address"
                  name="uname"
                  required
                ></input>
                <p className=" absolute text-red-600 bg-slate-700 px-2 font-bold">
                  {emailrr}
                </p>
              </div>
              <div className="pt-[50px] ">
                <div>
                  <label for="uname">
                    <b className="pl-3">Password</b>
                  </label>{" "}
                  <br />
                  <div className="relative w-[300px] ">
                    <input
                      value={password}
                      onChange={changePassword}
                      type={eye ? "text" : "password"}
                      className="border border-navColor p-3 bg-white outline-none w-full"
                      placeholder="Enter Password"
                      name="uname"
                      required
                    ></input>
                    <p className=" absolute text-red-600 bg-slate-700 font-regular px-2 ">
                      {passwordrr}
                    </p>
                    {eye ? (
                      <IoIosEye
                        onClick={() => setEye(!eye)}
                        className="absolute top-[50%] -translate-y-1/2 lg:right-2 right-1"
                      />
                    ) : (
                      <IoIosEyeOff
                        onClick={() => setEye(!eye)}
                        className="absolute top-[50%] -translate-y-1/2 lg:right-2 right-1"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Flex>
          </div>

          <div></div>
        </div>
        {loader ? (
          <Button onClick={submit} btnText={"Login"} className={"mt-6"} />
        ) : (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#4fa94d"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}

        <Heading
          as={"h3"}
          text={"New Customer"}
          className="font-dm font-bold text-[40px] lg:pt-[50px]"
        />
        <Heading
          as={"p"}
          text={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the."
          }
          className="font-dm font-regular text-[16px] pt-[30px] lg:pr-[700px] text-navColor"
        />
        <Link to="/sinup">
          <Button onClick={submit} btnText={"Continue"} className={"mt-10"} />
        </Link>
      </Container>
    </div>
  );
};

export default Sinup;
