import React from "react";
import PatientImage from "../assets/images/undraw_medical_care_movn.svg";
import MedicalImage from "../assets/images/undraw_medicine_b-1-ol.svg";
import TreatmentImage from "../assets/images/undraw_doctors_p6aq.svg";

const workProcessSteps = [
  {
    title: "Seeing Patients",
    description:
      "Our goal is to provide compassionate, patient-centered care that meets the unique needs of each individual.",
    imgSrc: PatientImage,
  },
  {
    title: "Making a Diagnosis",
    description:
      "Our process begins with a comprehensive medical assessment, which may include reviewing the patient's medical history.",
    imgSrc: MedicalImage,
  },
  {
    title: "Developing a Treatment",
    description:
      "Our approach to developing treatment plans is rooted in evidence-based medicine and personalized care. ",
    imgSrc: TreatmentImage,
  },
];

const WorkProcess = () => {
  return (
    <div className="py-16 bg-teal-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-teal-500 uppercase tracking-wide font-semibold">
          Our Work Process
        </h3>
        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          Let's See How We Work
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-zinc-500 dark:text-zinc-400 mx-auto">
          We take pride in our streamlined work
          process designed to deliver efficient and effective results. 
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10">
          {workProcessSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-teal-100 p-6 rounded-full">
                <img src={step.imgSrc} alt={step.title} className="w-16 h-16" />
              </div>
              <h4 className="mt-4 text-lg leading-6 font-medium text-zinc-900 dark:text-white">
                {step.title}
              </h4>
              <p className="mt-2 text-base text-zinc-500 dark:text-zinc-400 text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
