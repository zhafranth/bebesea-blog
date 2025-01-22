import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useMemo } from "react";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  const year = useMemo(() => {
    let currentDate = new Date();
    return currentDate.getFullYear();
  }, []);

  const socialMedia = useMemo(() => {
    return [
      {
        href: "https://www.instagram.com/bebeseaorg",
        icon: <FaInstagram size={20} />,
      },
      {
        href: "https://www.facebook.com/bebeseaorg",
        icon: <FaFacebook size={20} />,
      },
      {
        href: "https://x.com/bebeseaorg",
        icon: <FaXTwitter size={20} />,
      },
      {
        href: "https://www.linkedin.com/company/bebeseaorg",
        icon: <FaLinkedin size={20} />,
      },
      {
        href: "https://www.youtube.com/channel/UCg16gxXrlu4vDTks2t9wCVA",
        icon: <FaYoutube size={20} />,
      },
      {
        href: "mailto:someone@example.com",
        icon: <IoIosMail size={20} />,
      },
    ];
  }, []);
  return (
    <div className="bg-yellow-200 ">
      {/* Subscription Section */}
      <div className="py-12 bg-orange-700 text-white">
        <div className="container flex flex-wrap justify-center sm:justify-between">
          <div className="flex-1">
            <h2 className="sm:w-[60%] sm:mb-0 mb-6 font-bold text-3xl">
              Share, Connect, and <br /> Collaborate
            </h2>
            <div className="flex gap-x-4 mt-4">
              <input
                type="text"
                placeholder="Enter your email here"
                className="rounded-full p-3 outline-none text-xs w-full sm:w-1/3"
              />
              <Button className="bg-[#385653] rounded-full text-white font-semibold">
                Submit
              </Button>
            </div>
          </div>
          <div className="flex self-baseline overflow-hidden w-full sm:w-auto">
            <div className="flex gap-x-4 mt-3">
              {socialMedia.map(({ href, icon }, index) => (
                <Link href={href} target="_blank" key={`social-media-${index}`}>
                  <Button
                    isIconOnly
                    size="lg"
                    radius="full"
                    className="bg-[#385653] text-white"
                  >
                    {icon}
                  </Button>
                </Link>
              ))}
            </div>
            {/* <input
              type="text"
              placeholder="Enter your email here"
              className="rounded-l-xl p-3 outline-none text-xs w-full sm:w-auto"
            />
            <button className="text-xs p-4 rounded-r-xl bg-yellow-700 text-white">
              SUBSCRIBE
            </button> */}
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
