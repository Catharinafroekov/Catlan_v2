import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Arrow from "@/components/Arrow";
import Banner from "@/components/Banner";
import LineupBands from "@/components/LineupBands";
import CountdownFestival from "@/components/CountdownFestival";
import StandardButton from "@/components/StandardButton";
import Link from "next/link";

export default function Home() {
  return (
    //har tilføjet overflow-hidden, som gør at der ikke kommer scroll horisentalt
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
