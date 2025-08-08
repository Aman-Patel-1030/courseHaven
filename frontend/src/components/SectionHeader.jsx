import React from 'react'
const SectionHeader = ({ span, h2, p }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex items-center flex-col text-center gap-1"
    >
      {/* <span className="uppercase text-sm font-bold tracking-widest text-black">{span}</span> */}
      <div className="border-2 border-blue-200 bg-primary-900 inline-block px-3 py-1 text-white rounded-full text-sm font-medium mb-4">
              {span}
            </div>
      <h2 className="text-4xl text-black">{h2}</h2>
      <p className="lg:w-3/5 text-gray-500">{p}</p>
    </div>
  );
};

export default SectionHeader;
