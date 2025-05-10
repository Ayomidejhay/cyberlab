'use client'
import { useEffect } from "react";

const LinkedInBadge = () => {
  useEffect(() => {
    // Load LinkedIn's badge script dynamically
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-4">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="dark"
        data-type="VERTICAL"
        data-vanity="moses-ughabojor-756b63136"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://ng.linkedin.com/in/moses-ughabojor-756b63136?trk=profile-badge"
        >
          Moses Ughabojor
        </a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
