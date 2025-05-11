"use client";

import { Home } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const NotFound = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <div
        className={`text-center px-4 transform transition-all duration-1000 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-8xl font-bold text-[#193d3d] mb-4">404</h2>
        <h3 className="text-3xl font-semibold text-[#193d3d] mb-6">
          Page Not Found
        </h3>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved to a
          different location.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#193d3d] text-white rounded-md hover:bg-slate-600 transition-colors inline-flex items-center gap-2"
        >
          <Home size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
