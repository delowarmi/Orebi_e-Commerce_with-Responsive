import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Flex from "../Flex";
import Button from "../Button";
import axios from "axios";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Breadcrumb from "../Breadcrumb";
import {getAuth,createUserWithEmailAndPassword,sendEmailVerification,
updateProfile,} from "firebase/auth";
import { BallTriangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { toast, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDatabase, ref, set} from "firebase/database";
// import {auth,db} from '../../firebaseConfig'
const Signup = () => {
  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();
  const bdTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }); //bd time setup
  // State variables
  const [eye, setEye] = useState(false);
  const [eyes, setEyes] = useState(false);
  const [loader, setLoader] = useState(true);
  const [countries, setCountries] = useState([]);

  // Form states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    region: "",
    postCode: "",
    password: "",
    confirmPassword: "",
  });

  // Error states
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    password: "",
    confirmPassword: "",
  });

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      isValid = false;
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
      isValid = false;
    }

    // Email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Phone
    if (!formData.phone) {
      newErrors.phone = "Phone Number is required";
      isValid = false;
    }

    // Address 1
    if (!formData.address1.trim()) {
      newErrors.address1 = "Address is required";
      isValid = false;
    }

    // City
    if (!formData.city) {
      newErrors.city = "City is required";
      isValid = false;
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(
        formData.password,
      )
    ) {
      newErrors.password =
        "Password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character, and be at least 8 characters";
      isValid = false;
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoader(false);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      await updateProfile(userCredential.user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });

      await sendEmailVerification(userCredential.user);

      // Save user data to Realtime Database
      await set(ref(db, `users/${userCredential.user.uid}`), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: {
          line1: formData.address1,
          line2: formData.address2,
          city: formData.city,
          country: formData.country,
          region: formData.region,
          postCode: formData.postCode,
        },
        // createdAt: new Date().toISOString(),
          createdAt: bdTime, 
        
      });

      toast.success("Registration successful! Please verify your email.");
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      console.error("Registration error:", error);
      setLoader(true);
      if (error.code === "auth/email-already-in-use") {
        setErrors((prev) => ({ ...prev, email: "Email already exists" }));
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="py-[80px] bg-white overflow-hidden">
      {/* <ToastContainer position="top-right" autoClose={5000} /> */}
      <Container>
        {/* Breadcrumb and header section */}
        <div className="border-b pb-20">
          <Heading
            as="h3"
            text="Sign up"
            className="font-dm font-bold text-[40px]"
          />
          <Breadcrumb />
          <Heading
            as="p"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            className="font-dm font-regular text-[16px] text-navColor lg:pr-[700px]"
          />
        </div>

        {/* Main form */}
        <form onSubmit={handleSubmit}>
          {/* Personal Details Section */}
          <Heading
            as="h3"
            text="Your Personal Details"
            className="font-dm font-bold text-[32px] lg:text-[40px] border-b pb-3 bottom-BorderInfoColor"
          />

          <Flex className="gap-x-6 border-b pb-3 flex-col lg:flex-row">
            {/* First Name */}
            <div className="pt-[50px] relative">
              <label className="pl-1 font-bold flex">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
                placeholder="Enter First Name"
              />
              {errors.firstName && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.firstName}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="pt-[50px] relative">
              <label className="pl-1 font-bold flex">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Last Name"
              />
              {errors.lastName && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.lastName}
                </p>
              )}
            </div>
          </Flex>

          {/* Email and Phone Section */}
          <Flex className="gap-x-6 border-b pb-3 flex-col lg:flex-row">
            {/* Email */}
            <div className="pt-[50px] relative">
              <label className="pl-1 font-bold flex">Email Address</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
                placeholder="Email address"
              />
              {errors.email && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="pt-[50px] relative">
              <label className="pl-1 font-bold flex">Telephone</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Telephone"
              />
              {errors.phone && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.phone}
                </p>
              )}
            </div>
          </Flex>

          {/* Address Section */}
          <Heading
            as="h3"
            text="New Customer"
            className="font-dm font-bold text-[40px] pt-[40px] border-b pb-3 bottom-BorderInfoColor"
          />

          <Flex className="gap-x-6 border-b pb-3 flex-col lg:flex-row">
            {/* Address 1 */}
            <div className="pt-[50px] relative">
              <label className="pl-1 font-bold flex">Address 1</label>
              <input
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Address"
              />
              {errors.address1 && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.address1}
                </p>
              )}
            </div>

            {/* Address 2 */}
            <div className="pt-[50px] relative">
              <label className="pl-1 flex font-bold">Address 2</label>
              <input
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
                placeholder="Enter Address2"
              />
              {errors.address2 && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.address2}
                </p>
              )}
            </div>
          </Flex>

          {/* Location Section */}
          <Flex className="gap-x-6 border-b pb-3 flex-col lg:flex-row">
            {/* City */}
            <div className="pt-[50px] relative">
              <label className="pl-1 flex font-bold">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
              >
                <option value="">Select City</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.capital}>
                    {country.capital}
                  </option>
                ))}
              </select>
              {errors.city && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.city}
                </p>
              )}
            </div>

            {/* Country */}
            <div className="pt-[50px] relative">
              <label className="pl-1 flex font-bold">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
              >
                <option value="">Select Country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))}
              </select>
            </div>
          </Flex>

          <Flex className="gap-x-6 border-b pb-3 flex-col lg:flex-row">
            {/* City */}
            <div className="pt-[50px] relative">
              <label className="pl-1 flex font-bold">Post-Code</label>
              <select
                name="postCode"
                value={formData.postCode}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
              >
                <option value="">Select Post-Code</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.area}>
                    {country.area}
                  </option>
                ))}
              </select>
            </div>

            {/* Country */}
            <div className="pt-[50px] relative">
              <label className="pl-1 flex font-bold">Region</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="border border-navColor p-3 bg-white outline-none w-[300px]"
              >
                <option value="">Select Region</option>
                {countries.map((country, index) => (
                  <option key={index} value={country.region}>
                    {country.region}
                  </option>
                ))}
              </select>
            </div>
          </Flex>

          {/* Password Section */}
          <Heading
            as="h3"
            text="Your Password"
            className="font-dm font-bold text-[40px] pt-[40px] border-b pb-3 bottom-BorderInfoColor"
          />

          <Flex className="gap-x-6 border-b pb-3 flex-col lg:flex-row">
            {/* Password */}
            <div className="pt-[50px] relative">
              <label className="pl-3 font-bold">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={eye ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  placeholder="Enter Password"
                />
                <button
                  type="button"
                  onClick={() => setEye(!eye)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {eye ? <IoIosEye /> : <IoIosEyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600 absolute bottom-[-55px] left-0 text-[13px]">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="pt-[50px] relative">
              <label className="pl-3 font-bold">Repeat Password</label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  type={eyes ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="border border-navColor p-3 bg-white outline-none w-[300px]"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setEyes(!eyes)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {eyes ? <IoIosEye /> : <IoIosEyeOff />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-600 absolute bottom-[-25px] left-0">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </Flex>

          {/* Terms and Newsletter */}
          <div className="pt-8">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" className="pl-2 text-navColor">
              I agree to the Privacy Policy
            </label>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            {loader ? (
              <Button
                type="submit"
                btnText="Sign Up"
                className="mt-6 bg-primary text-white px-8 py-3 rounded hover:bg-primaryDark"
              />
            ) : (
              <BallTriangle
                height={50}
                width={50}
                radius={5}
                color="#4fa94d"
                ariaLabel="loading"
              />
            )}
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
