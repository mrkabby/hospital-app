import React, { useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    contactMethod: "",
    contactTime: "",
    helpText: "",
    additionalNotes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <>
    <NavBar />
    
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg max-w-3xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-teal-600 mb-4 text-center">Appointment Form</h2>
      <p className="text-zinc-700 dark:text-zinc-300 mb-8">
        To schedule an appointment, please fill out the information below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Appointment Details
          </h3>
          <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
            Please select an appointment date
          </label>
          <input
            type="date"
            name="appointmentDate"
            className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Phone Number
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                (000) 000-0000
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={handleChange}
            />
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Please enter a valid phone number.
            </span>
          </div>
          <div className="mt-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Email
              <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                example@example.com
              </span>
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Best method for contacting you?
            </label>
            <select
              name="contactMethod"
              className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Best time of day to reach you?
            </label>
            <select
              name="contactTime"
              className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={handleChange}
            >
              <option value="">Please Select</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
            How can we help you?
          </label>
          <textarea
            name="helpText"
            className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Type here..."
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
            Additional notes:
          </label>
          <textarea
            name="additionalNotes"
            className="w-full p-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Type here..."
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-[#19B0A1] text-white p-3 rounded-lg hover:bg-[#274D7C]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AppointmentForm;
