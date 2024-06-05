import React from 'react';

const FacilitiesCard = ({ title, description, img }) => {
  return (
    <div className="bg-teal-500 text-white p-6 rounded-lg shadow-md">
      <img src={img} alt={title} className="mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default FacilitiesCard;
