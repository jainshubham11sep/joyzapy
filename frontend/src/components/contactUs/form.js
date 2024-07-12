"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-[662.1px] flex flex-col gap-[30px] m-auto max-[720px]:w-auto mb-16">
        <div className="flex gap-4 max-[550px]:flex-col">
          <div className="flex flex-col gap-[7px] w-[calc((100%/2))] max-[550px]:w-full">
            <h4 className="font-montserrat font-semibold text-lg leading-[21.94px] text-[#999999]">
              Full name *
            </h4>
            <input
              type="text"
              name="name"
              id="name"
              className="px-8 py-[21.5px] w-full rounded-[283px] border font-montserrat font-normal text-base leading-[28.8px] tracking-[0.08px] outline-none max-[550px]:px-4 max-[550px]:py-3"
              placeholder="John David"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-[7px] w-[calc((100%/2))] max-[550px]:w-full">
            <h4 className="font-montserrat font-semibold text-lg leading-[21.94px] text-[#999999]">
              Your email *
            </h4>
            <input
              type="email"
              name="email"
              id="email"
              className="px-8 py-[21.5px] w-full rounded-[283px] border font-montserrat font-normal text-base leading-[28.8px] tracking-[0.08px] outline-none max-[550px]:px-4 max-[550px]:py-3"
              placeholder="example@yourmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex gap-4 max-[550px]:flex-col">
          <div className="flex flex-col gap-[7px] w-[calc((100%/2))] max-[550px]:w-full">
            <h4 className="font-montserrat font-semibold text-lg leading-[21.94px] text-[#999999]">
              Phone *
            </h4>
            <input
              type="number"
              name="phone"
              id="phone"
              className="px-8 py-[21.5px] w-full rounded-[283px] border font-montserrat font-normal text-base leading-[28.8px] tracking-[0.08px] outline-none max-[550px]:px-4 max-[550px]:py-3"
              placeholder="(000) 123 456"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col gap-[7px] w-[calc((100%/2))] max-[550px]:w-full">
            <h4 className="font-montserrat font-semibold text-lg leading-[21.94px] text-[#999999]">
              Subject *
            </h4>
            <input
              type="text"
              name="subject"
              id="subject"
              className="px-8 py-[21.5px] w-full rounded-[283px] border font-montserrat font-normal text-base leading-[28.8px] tracking-[0.08px] outline-none max-[550px]:px-4 max-[550px]:py-3"
              placeholder="ex. project"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-[7px] w-full">
          <h4 className="font-montserrat font-semibold text-lg leading-[21.94px] text-[#999999]">
            Leave us a message
          </h4>
          <textarea
            name="message"
            id="message"
            placeholder="Hello there,I would like to talk about how to..."
            className="px-[30px] py-[31px] w-full rounded-[20px] font-montserrat font-normal text-base leading-[28.8px] tracking-[0.08px] outline-none max-[550px]:px-4 max-[550px]:py-3"
            rows={8}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex rounded-[12px] py-2 px-6 gap-4 bg-[#0088DC] shadow-[8px_8px_0px_0px_#00000040] w-fit m-auto text-[#F4F4F4] font-montserrat font-bold text-[25px] leading-[30.48px]"
        >
          Submit form
        </button>
      </div>
    </form>
  );
};

export default Form;
