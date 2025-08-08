import React from 'react'
import Button from "./Button";
const Slide = ({ image }) => {
  return (
   <div className="slide relative" >
    <img
        src={image.src}
        alt="Slide background"
        className="absolute inset-0 w-full h-full object-cover blur-xs "
      />
  <div className="slide-texts wrapper py-10 flex flex-col items-start justify-center h-full gap-5 text-white absolute inset-0">
    <h1
      className="text-3xl md:text-5xl lg:text-6xl font-bold space-font w-full uppercase"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {image.headline}
    </h1>

    <p
      className="w-full lg:w-2/3 lg:text-xl text-lg"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {image.body}
    </p>

    <div className="mt-3" data-aos="fade-right" data-aos-duration="1000">
      <Button href="/courses" placeholder={image.cta} color="primary" />
    </div>
  </div>
</div>

  );
};

export default Slide;