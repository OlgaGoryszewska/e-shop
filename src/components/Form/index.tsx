import React from "react";

const Form = () => {
  return (
    <div className="flex justify-center pt-10">
        <form onSubmit={(event) => {
          event.preventDefault();
          console.log("Form submitted");
        }} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-5">Contact us</h2>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm">Full Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="block mb-2 text-sm">Subject</label>
          <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-5">
          <label htmlFor="body" className="block mb-2 text-sm">Body</label>
          <input type="message" id="body" className="w-full p-7 border border-gray-300 rounded" />
        </div>
        <button className="w-full bg-brown hover:bg-primary text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
        </form>
    </div>

  );
};

export default Form;