import React, { useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";
import { db } from "../../firebaseConfig"; // Firebase import
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "contacts"), formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Try again!");
    }
  };

  return (
    <div className="py-7 lg:py-[100px] overflow-hidden">
      <Container>
        <Heading as="h3" text="Contacts" className="font-dm font-bold text-[40px] text-navHColor" />
        <Breadcrumb />
        <Heading as="h3" text="Fill up a Form" className="font-dm font-bold text-[40px] pt-7 lg:pt-[100px] text-navHColor" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="pt-5 lg:pt-[60px]">
          <div>
            <label htmlFor="name">
              <b className="pl-3">Name</b>
            </label>
            <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-navColor outline-none p-3 w-[300px] md:w-[500px] h-[40px]"
              placeholder="Your name here"
              required
            />
          </div>

          <div className="pt-[30px]">
            <label htmlFor="email">
              <b className="pl-3">Email</b>
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-navColor outline-none p-3 w-[300px] md:w-[500px] h-[40px]"
              placeholder="Your email here"
              required
            />
          </div>

          <div className="pt-[30px]">
            <label htmlFor="message">
              <b className="pl-3">Message</b>
            </label>
            <br />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-navColor outline-none p-3 w-[300px] md:w-[500px] h-[150px] resize-none"
              placeholder="Your message here"
              required
            ></textarea>
          </div>

          <div className="pt-[30px] group">
            <button type="submit" className=" hover:bg-slate-700 hover:text-yellow-600 rounded-lg border border-navColor py-[10px] px-[60px] mt-[40px] bg-black text-white">
              Post
            </button>
          </div>
        </form>

        {/* Google Map */}
        <div className="pt-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10329.405579260427!2d90.36716750340462!3d23.74750902224724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1734290075772!5m2!1sen!2sbd"
            className="w-full h-[350px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
