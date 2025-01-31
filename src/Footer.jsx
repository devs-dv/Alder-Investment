import React from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    // this is testing
    <footer className="bg-[#e7e6e2] py-10 px-5 lg:px-10">
      <div className="w-full flex  max-md:gap-4 justify-between text-[#545454] mb-60">
        <div className="md:w-4/6">
          <img src="footer.png" alt="ALDER Investments logo" />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-0 items-center justify-center md:flex-row md:justify-between md:items-end">
        <div>
          <Link
            to="/privacy"
            className="underline text-[#565656] hover:text-black max-md:text-center"
          >
            PRIVACY POLICY
          </Link>
        </div>
        <div>
          <p className="text-[#565656] uppercase md:-ml-14 max-md:text-center">
            © 2025 Alder Investments
          </p>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/alder-partners-674336306/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center text-[#565656] hover:text-black ">
              LINKEDIN <MdArrowOutward className="text-xl" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
