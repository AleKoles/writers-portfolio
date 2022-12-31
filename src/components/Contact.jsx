import React from "react";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-fit lg:h-screen py-4 px-8 md:px-20 flex-col justify-center"
    >
      <div className="pb-8">
        <h4 className="text-4xl font-bold inline border-b-4 border-primary ">
          Contact
        </h4>
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
        <form
          method="POST"
          action="https://getform.io..."
          className="flex flex-col max-w-[600px] w-full"
        >
          <input
            className="bg-white p-2 focus:ring-dark"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-white focus:ring-dark"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-white p-2 focus:ring-dark"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="text-primary text-xl uppercase border-2 hover:bg-primary hover:text-light border-primary px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
        <div className="flex gap-x-20 m-8 lg:hidden">
          <a
            href="https://www.linkedin.com/in/inna-reshetnyak-b2a538102"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-4xl duration-300 hover:scale-125" />
          </a>
          <a href="https://t.me/InnaRre" target="_blank" rel="noreferrer">
            <FaTelegramPlane className="text-4xl duration-300 hover:scale-125" />
          </a>
          <a
            href="mailto:inna.zhelezovskaya@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineMail className="text-4xl duration-300 hover:scale-125" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
