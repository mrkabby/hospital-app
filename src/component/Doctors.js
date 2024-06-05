import React, { useState } from "react";
import DianaImage from "../component/assets/images/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
import TracyImage from "../component/assets/images/femaledr.jpg"
import JefferyImage from "../component/assets/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
import AllenImage from "../component/assets/images/handsome-indian-doctor-generate-ai-photo.jpg"
import facebookIcon from "../component/assets/images/icons8-facebook.svg"; // Replace with the actual path to your Facebook icon
import twitterIcon from "../component/assets/images/icons8-twitterx.svg"; // Replace with the actual path to your Twitter icon
import whatsappIcon from "../component/assets/images/icons8-whatsapp.svg";


const doctors = [
  {
    name: "Dr. Diana Ayers",
    specialty: "Cardiologist",
    imgSrc: DianaImage,
    socials: [
      { name: "facebook", iconSrc:facebookIcon },
      { name: "twitter", iconSrc: twitterIcon },
      { name: "whatsapp", iconSrc: whatsappIcon },
    ],
  },
  {
    name: "Dr. Tracy Mckay",
    specialty: "Cardiologist",
    imgSrc: TracyImage,
    socials: [
      { name: "facebook", iconSrc:facebookIcon },
      { name: "twitter", iconSrc: twitterIcon },
      { name: "whatsapp", iconSrc: whatsappIcon }
    ],
  },
  {
    name: "Dr. Jeffrey Davis",
    specialty: "Cardiologist",
    imgSrc: JefferyImage,
    socials: [
      { name: "facebook", iconSrc:facebookIcon },
      { name: "twitter", iconSrc: twitterIcon },
      { name: "whatsapp", iconSrc: whatsappIcon }
    ],
  },
  {
    name: "Dr. Allen Hartzler",
    specialty: "Cardiologist",
    imgSrc: AllenImage,
    socials: [
      { name: "facebook", iconSrc:facebookIcon },
      { name: "twitter", iconSrc: twitterIcon },
      { name: "whatsapp", iconSrc: whatsappIcon }
    ],
  },
];

const DoctorCard = ({ doctor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={doctor.imgSrc}
        alt={doctor.name}
        className={`w-full h-64 object-cover ${
          isHovered && doctor.socials.length ? "opacity-75" : ""
        }`}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {doctor.name}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400">{doctor.specialty}</p>
        {isHovered && doctor.socials.length > 0 && (
          <div className="flex space-x-2 mt-2">
            {doctor.socials.map((social, index) => (
              <a key={index} href="#" className="text-white">
                <img
                  aria-hidden="true"
                  alt={social.name}
                  src={social.iconSrc}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Doctors = () => {
  return (
    <>
    
    
    <div className="p-6 bg-teal-50 dark:bg-zinc-900">
      <div className="text-center mb-8">
        <h2 className="text-teal-500 font-semibold uppercase">Our Doctors</h2>
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          Our Best Doctors
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-zinc-300 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 p-2 rounded-full mx-1">
          <img
            aria-hidden="true"
            alt="left arrow"
            src="/icons/left-arrow.svg"
            className="w-4 h-4"
          />
        </button>
        <button className="bg-teal-500 text-white p-2 rounded-full mx-1">
          <img
            aria-hidden="true"
            alt="right arrow"
            src="/icons/right-arrow.svg"
            className="w-4 h-4"
          />
        </button>
      </div>
    </div>
    </>
  );
};

export default Doctors;
