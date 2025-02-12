import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import axios from "axios";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Breadcrumb from "../Breadcrumb";
import {getAuth,createUserWithEmailAndPassword, sendEmailVerification,updateProfile} from "firebase/auth";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set } from "firebase/database";
const Sinup = () => {
  const auth = getAuth();
  const db = getDatabase();
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
  let [error, setError] = useState("");
  let changeRepassword = (e) => {
    setConfirmPassword(e.target.value);
    setRepasswordrr("");
  };

  let submit = () => {
    if (!name) {
      setNamerr("Name is Requard");
    }
    if (!namelast) {
      setNamerrlast("Last Name is Requard");
    }
    if (!email) {
      setEmailrr("Email is Requard");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
      setEmailrr("You have entered an invalid email address!");
    }
    if (!phone) {
      setPhonerr("Phone Number is Requard");
    }
    if (!add) {
      setAddrr("Address is Requard");
    }
    if (!add2) {
      setAddrr2("Address is Requard");
    }
    if (!city) {
      setCityrr("City is Requard");
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
      name &&
      email &&
      password &&
      confirmPassword &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password) &&password === confirmPassword
    ) 
    try{
      
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log('user',user);
          

          toast.success("Registation Successfull");

          console.log(user);
          // ...
        }).then(()=>{
          updateProfile(auth.currentUser, {
            displayName:name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
        })
        .then(()=>{
          set(ref(db, 'user/'),{
          
            usernmae:name,
            lastname:namelast,
            email: email,
            useradress:add,
            usernumber:phone,
            
            
          });
        })
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            setTimeout(() => {
              navigate("/login");
            }, 1000);
            // ...
          });
        })
        .catch((error) => {
          // const errorCode = error.code;
          // setEmailrr(errorCode);
          // ..
          if (error.code.includes('auth/user not found')) {
            
          }else{
            setEmailrr('Email Already Exists ');
          }
        });
    }catch(error){
      setError('Passwords do not match. Please try again.')
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
            text={"Sign up"}
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
          <Heading
            as={"h3"}
            text={"Your Personal Details"}
            className="font-dm font-bold text-[32px] lg:text-[40px] border-b pb-3 bottom-BorderInfoColor"
          />
          <Flex className={"gap-x-6 border-b pb-3 flex-col lg:flex-row"}>
            <div className="pt-[50px]">
              <label for="uname">
                <b className="pl-3">First Name</b>
              </label>{" "}
              <br />
              <input
                value={name}
                onChange={changeName}
                type="text"
                className="border border-navColor  = p-3 bg-white outline-none w-[300px]"
                placeholder="Enter First Name"
                name="uname"
                required
              ></input>
              <p className=" absolute text-red-600 bg-slate-700 px-2 font-bold">
                {namerr}
              </p>
            </div>
            <div className="pt-[50px]">
              <label for="uname">
                <b className="pl-3">Last Name</b>
              </label>{" "}
              <br />
              <input
                value={namelast}
                onChange={changeNamelast}
                type="text"
                className="border border-navColor  p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Last Name"
                name="uname"
                required
              ></input>
              <p className=" absolute text-red-600 bg-slate-700 px-2 font-bold">
                {namerrlast}
              </p>
            </div>
          </Flex>
          <Flex className={"gap-x-6 border-b pb-3  flex-col lg:flex-row"}>
            <div className="pt-[50px]">
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
            <div className="pt-[50px]">
              <label for="uname">
                <b className="pl-3">Telephone</b>
              </label>{" "}
              <br />
              <input
                value={phone}
                onChange={changephone}
                type="tel"
                className="border border-navColor  p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Telephone"
                name="uname"
                required
              ></input>
              <p className=" absolute text-red-600 bg-slate-700 font-bold px-2">
                {phonerr}
              </p>
            </div>
          </Flex>
          <div>
            <Heading
              as={"h3"}
              text={"New Customer"}
              className="font-dm font-bold text-[40px] pt-[40px] border-b pb-3 bottom-BorderInfoColor"
            />
            <Flex className={"gap-x-6 border-b pb-3  flex-col lg:flex-row"}>
              <div className="pt-[50px]">
                <label for="uname">
                  <b className="pl-3">Address 1</b>
                </label>{" "}
                <br />
                <input
                  value={add}
                  onChange={changeAdd}
                  type="text"
                  className="border border-navColor  p-3 bg-white outline-none w-[300px]"
                  placeholder="Enter Address"
                  name="uname"
                  required
                ></input>
                <p className=" absolute text-red-600 bg-slate-700 font-bold px-2">
                  {addrr}
                </p>
              </div>
              <div className="pt-[50px]">
                <label for="uname">
                  <b className="pl-3">Address 2</b>
                </label>{" "}
                <br />
                <input
                  value={add2}
                  onChange={changeAdd2}
                  type="text"
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  placeholder="Enter Address2"
                  name="uname"
                  required
                ></input>
                <p className=" absolute text-red-600 bg-slate-700 font-bold px-2">
                  {addrr2}
                </p>
              </div>
            </Flex>
            <Flex className={"gap-x-6 border-b pb-3  flex-col lg:flex-row"}>
              <div className="pt-[50px]">
                <label for="uname">
                  <b className="pl-3">City</b>
                </label>{" "}
                <br />
                <select
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  id=""
                >
                  {all.map((item) => (
                    <option value={city} onChange={changeCity}>
                      {item.city}
                    </option>
                  ))}
                  <p className=" absolute text-red-600 font-bold">{cityrr}</p>
                </select>
              </div>
              <div className="pt-[50px]">
                <label for="uname">
                  <b className="pl-3">Post Code</b>
                </label>{" "}
                <br />
                <select
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  id=""
                >
                  {all.map((item) => (
                    <option>{item.post}</option>
                  ))}
                </select>
              </div>
            </Flex>
            <Flex className={"gap-x-6 border-b pb-3  flex-col lg:flex-row "}>
              <div className="pt-[50px]">
                <label for="uname">
                  <b className="pl-3">Country</b>
                </label>{" "}
                <br />
                <select
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  id=""
                >
                  {all.map((item) => (
                    <option>{item.country}</option>
                  ))}
                </select>
              </div>
              <div className="pt-[50px]">
                <label for="uname">
                  <b className="pl-3">Region</b>
                </label>{" "}
                <br />
                <select
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  id=""
                >
                  {all.map((item) => (
                    <option>{item.region}</option>
                  ))}
                </select>
              </div>
            </Flex>
          </div>
          <div>
            <Heading
              as={"h3"}
              text={"Your Password"}
              className="font-dm font-bold text-[40px] pt-[40px] border-b pb-3 bottom-BorderInfoColor"
            />
            <Flex className={"gap-x-6 border-b pb-3  flex-col lg:flex-row"}>
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
              <div className="pt-[50px] relative">
                <label for="uname">
                  <b className="pl-3">Repeat Password</b>
                </label>{" "}
                <br />
                <div className="relative w-[300px] ">
                  <input
                    value={confirmPassword}
                    onChange={changeRepassword}
                    type={eyes ? "text" : "password"}
                    className="outline-none border border-navColor p-3 bg-white  w-[300px]"
                    placeholder="Enter Re-Password"
                    name="uname"
                    required
                  ></input>
                  <p className=" absolute text-red-600 bg-slate-700 font-regular px-2 ">
                    {repasswordrr}
                  </p>

                  {eyes ? (
                    <IoIosEye
                      onClick={() => setEyes(!eyes)}
                      className="absolute top-[50%] -translate-y-1/2 right-2"
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={() => setEyes(!eyes)}
                      className="absolute top-[50%] -translate-y-1/2 right-2"
                    />
                  )}
                </div>
              </div>
            </Flex>
          </div>
        </div>
        <div className="pt-8">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label
            for="vehicle1"
            className="font-dm font-regular text-[16px] text-navColor "
          >
            {" "}
            I have read and agree to the Privacy Policy
          </label>{" "}
          <br />
        </div>
        <div className="pt-6">
          <fieldset data-role="controlgroup">
            <Flex>
              <Heading
                as={"p"}
                text={"Subscribe Newsletter"}
                className="font-dm font-regular text-[16px] text-navColor pr-4"
              />
              <label for="yes">Yes</label>
              <input
                type="radio"
                name="logic"
                id="yes"
                value="yes"
                checked
              ></input>
              <label for="no" className="pl-4">
                No
              </label>
              <input type="radio" name="logic" id="no" value="no"></input>
            </Flex>
          </fieldset>
        </div>

        {loader ? (
          <Button onClick={submit} btnText={"Sign Up"} className={"mt-6"} />
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
      </Container>
    </div>
  );
};

export default Sinup;
