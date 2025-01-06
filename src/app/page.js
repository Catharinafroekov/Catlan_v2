import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import LineupBands from "@/components/LineupBands";
import Timer from "@/components/Timer";
import CountdownFestival from "@/components/CountdownFestival";
import StandardButton from "@/components/StandardButton";
import Formel from "@/components/Formel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Banner />
      <Nav />

      {/* <Timer /> */}
      <CountdownFestival />
      <img
        className="xs:w-75 xs:h-75 xs:mt-10  md:w-150 md:h-150 mx-auto"
        src="/img/logo.svg"
        alt="logo ikon"
      />
      <Link href="/ticket">
        <StandardButton label="Buy your ticket here" />
      </Link>
      <Arrow />
      <LineupBands />
      <Link href="/lineup">
        <StandardButton label="See the full line up here" />
      </Link>
      <Footer />
    </div>
  );
}
