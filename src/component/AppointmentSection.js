import React from 'react';
import { Link } from 'react-router-dom';
import DoctorImage from "../component/assets/images/pngtree-young-afro-professional-doctor-png-image_10148632.png"

const AppointmentSection = () => {
  return (
    <div className="bg-teal-50 p-6 sm:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        <div className="space-y-4">
          <a href="#" className="text-teal-600 font-semibold">GET AN APPOINTMENT</a>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900">Widest Network Of Best Healthcare</h1>
          <p className="text-zinc-600">
            Using the Most Advanced Healing Technologies, Our Professionals will Restore you to
            Pain-Free Health as Quickly as Possible.
          </p>
          <div className="mt-4">
            <Link to="/appointment-form">
              <button className="bg-[#19B0A1] text-white px-3 py-2 rounded-md hover:bg-[#274D7C]">
                Book an Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center lg:justify-end">
          <img src={DoctorImage} alt="Doctor" className="rounded-lg shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
