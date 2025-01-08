import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-white bg-opacity-30 w-full p-10 mt-5">
      {/* Container til centrering */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        
        {/* Ikoner */}
        <div className="flex-1 flex flex-col items-center space-y-4">
          <FaInstagramSquare className="text-lilla h-12 w-12" />
          <FaFacebookSquare className="text-lilla h-12 w-12" />
          <FaTwitterSquare className="text-lilla h-12 w-12" />
        </div>

        {/* Tekst */}
        <div className="flex-1 text-center font-bold space-y-4">
          <p className="text-lilla lg:text-[20px]">Contact</p>
          <p className="text-lilla lg:text-[20px]">About Us</p>
          <p className="text-lilla lg:text-[20px]">Sponsor</p>
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center items-center">
          <Link href="/">
            <img
              className="w-20 h-20 md:w-40 md:h-40"
              src="/img/logo.svg"
              alt="logo ikon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
