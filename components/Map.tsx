import React from "react";

const Map = () => {
  return (
    <div className="mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3303298488777!2d3.364864173730386!3d6.605810922203959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b924d971794a3%3A0x5f36f7421e3a1974!2s35%20Olanrewaju%20St%2C%20Oregun%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1735325401330!5m2!1sen!2sng"
        width="1200"
        height="600"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="left-0 top-0 w-full h-96 rounded-lg"
      ></iframe>
    </div>
  );
};

export default Map;
