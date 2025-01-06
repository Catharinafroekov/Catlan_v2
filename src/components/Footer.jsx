import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="xs:h-250 lg:h-300 flex justify-evenly items-center p-10 mt-5 bottom-0 w-full bg-white bg-opacity-30">
      {/* Ikoner */}
      <div className="flex flex-col items-center basis-1/3">
        <FaInstagramSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50 mb-2" />
        <FaFacebookSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50 mb-2" />
        <FaTwitterSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50" />
      </div>

      {/* Tekst */}
      <div className="text-center font-bold basis-1/3">
        <p className="pb-5 pt-5 text-lilla lg:text-[20px]">Contact</p>
        <p className="pb-5 text-lilla lg:text-[20px]">About Us</p>
        <p className="pb-5 text-lilla lg:text-[20px]">Sponsor</p>
      </div>

      {/* Logo */}
      <Link href="/">
        <div className="flex justify-center items-center basis-1/3">
          <img
            className="xs:w-75 xs:h-75 xs:mt-10 md:w-150 md:h-150"
            src="/img/logo.svg"
            alt="logo ikon"
          />
        </div>
      </Link>
    </section>
  );
};

export default Footer;
