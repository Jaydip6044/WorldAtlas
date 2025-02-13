import React from "react";

function Contact() {

  const handleFormSubmit=(formData)=>{
      console.log(formData.entries());
      const formInputData= Object.fromEntries(formData.entries());
      console.log(formInputData)
  }

  return (
    <div className="bg-black h-screen text-white">
      <div className="form-container text-center p-3  mx-auto  ">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <form action={handleFormSubmit} className="p-5 flex flex-col mx-auto max-w-[400px]">
          <input
            className="p-2 border-1  m-3 rounded border-white hover:scale-105"
            type="text"
            required
            autoComplete="false"
            name="username"
            placeholder="Enter your name"
          />

          <input
            type="email"
            className="p-2 border-1 m-3 rounded border-white hover:scale-105"
            required
            autoComplete="false"
            name="email"
            placeholder="Enter your Email"
          />

          <textarea
            className="p-2 border-1 m-3 rounded border-white hover:scale-105"
            rows={10}
            placeholder="Enter your message"
            name="message"
            autoComplete="false"
          ></textarea>

          <button className="p-2 m-3 bg-slate-600  border-1 font-bold rounded border-white hover:scale-105" type="submit">
           <span className="">Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
