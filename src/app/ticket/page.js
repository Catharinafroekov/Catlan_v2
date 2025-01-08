import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Ticket from "@/components/Ticket";
import Camping from "@/components/Camping";
import Kurv from "@/components/Kurv";
import { Button } from "@radix-ui/themes";
import Betaling from "@/components/Betaling";

export default function TicketS() {
  return (
    <div>
      <Nav></Nav>
      <h1 className="text-4xl text-darkblue ml-20 mb-10">Choose your ticket</h1>
      <Ticket />
      <h1 className="text-4xl text-darkblue ml-20 mb-5 mt-20">
        Choose camping site
      </h1>
      <Camping />
      <Footer />
    </div>
  );
}
