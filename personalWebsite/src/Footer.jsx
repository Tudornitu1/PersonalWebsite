import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-4 border-t-1 border-gray-500 p-4 sm:p-6 md:p-8">
      <h1 className="text-white text-2xl mt-10">Contact me</h1>
      <input
        type="text"
        placeholder="Name"
        className="bg-transparent border-2 border-gray-500 rounded-md p-2 w-1/2"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-transparent border-2 border-gray-500 rounded-md p-2 w-1/2"
      />
      <textarea
        placeholder="Message"
        className="bg-transparent border-2 border-gray-500 rounded-md p-2 w-1/2 h-32"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-10">
        Send
      </button>
    </div>
  );
}

export default Footer;
