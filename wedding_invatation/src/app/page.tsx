import Header from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { RSVP } from "./components/RSVP";
import { Contact } from "./components/Contact";
import { Story } from "./components/Story";
import { Event } from "./components/Event";
import { BridalParty } from "./components/BridalParty";

export default function MainPage() {
  return (
    <div>
      <Header />
      <main className="">
        <Home />
        <About />
        <Story/>
        <Event/>
        <BridalParty/>
        <Gallery />
        <RSVP />
        <Contact />
      </main>
    </div>
  );
}