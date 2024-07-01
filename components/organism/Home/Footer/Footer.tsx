import React, { useMemo } from "react";

const Footer = () => {
  const year = useMemo(() => {
    let currentDate = new Date();
    return currentDate.getFullYear();
  }, []);
  return (
    <div className="bg-yellow-200 mt-16">
      {/* Subscription Section */}
      <div className="py-8 bg-yellow-500">
        <div className="container flex flex-wrap justify-center sm:justify-between">
          <h2 className="sm:w-[60%] sm:mb-0 mb-6 text-sm font-light">
            Dapatkan pembaruan terbaru dan konten eksklusif langsung di inbox
            Anda. Bergabunglah dengan komunitas kami dan jangan lewatkan
            informasi penting dari kami.
          </h2>
          <div className="flex overflow-hidden w-full sm:w-auto">
            <input
              type="text"
              placeholder="Enter your email here"
              className="rounded-l-xl p-3 outline-none text-xs w-full sm:w-auto"
            />
            <button className="text-xs p-4 rounded-r-xl bg-yellow-700 text-white">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      {/* Menu Section */}
      {/* Footer Section */}
      <div className="py-3 bg-slate-900 text-white">
        <div className="container flex justify-between text-[10px]">
          <p>© {year} Bebesea All rights reserved.</p>
          <div className="flex gap-x-3 items-center text-neutral-300">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
