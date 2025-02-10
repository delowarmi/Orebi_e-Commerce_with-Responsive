import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import Breadcrumb from "../Breadcrumb";

const Contact = () => {
  return (
    <div className="py-7 lg:py-[100px] overflow-hidden">
      <Container>
        <Heading
          as={"h3"}
          text={"Contacts"}
          className="font-dm font-bold text-[40px] text-navHColor"
        />
        <Breadcrumb />

        <Heading
          as={"h3"}
          text={"Fill up a Form"}
          className="font-dm font-bold text-[40px] pt-7 lg:pt-[100px] text-navHColor"
        />
        <div className="pt-5 lg:pt-[60px]">
          <label for="uname">
            <b className="pl-3 ">Name</b>
          </label>{" "}
          <br />
          <input
            type="text"
            className="border border-navColor outline-none  p-3 w-[300px] md:w-[500px] h-[40px] "
            placeholder="Your name here"
            name="uname"
            required
          ></input>
        </div>
        <div className="pt-[30px]">
          <label for="uname">
            <b className="pl-3 mt-[20px]">Email</b>
          </label>{" "}
          <br />
          <input
            type="text"
            className="border border-navColor outline-none  p-3 w-[300px] md:w-[500px] h-[40px]"
            placeholder="Your email here"
            name="uname"
            required
          ></input>
        </div>
        <div className="pt-[30px]">
          <label for="uname">
            <b className="pl-3 mt-[20px]">Massege</b>
          </label>{" "}
          <br />
          <input
            type="text"
            className="border border-navColor outline-none  p-3 w-[300px] md:w-[500px] h-[100px]"
            placeholder="Your massege here"
            name="uname"
            required
          ></input>
        </div>
        <div className="pt-[30px]">
          <button className="border border-navColor py-[10px] px-[60px] mt-[40px] bg-black text-white">
            Post
          </button>
        </div>

        <div className="pt-[100px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10329.405579260427!2d90.36716750340462!3d23.74750902224724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1734290075772!5m2!1sen!2sbd"
            className="w-full h-[350px]"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
