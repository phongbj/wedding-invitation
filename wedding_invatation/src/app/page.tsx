import Header from "./components/Header";
import { Section } from "./components/Section";

const sections = [
  { id: "home", title: "Trang Chủ" },
  { id: "about", title: "Giới Thiệu" },
  { id: "gallery", title: "Thư Viện" },
  { id: "rsvp", title: "Lời Mời" },
  { id: "contact", title: "Liên Hệ" },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        {sections.map((section) => (
          <Section key={section.id} id={section.id} title={section.title} />
        ))}
      </main>
    </div>
  );
}
