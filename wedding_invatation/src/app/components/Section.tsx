// src/app/components/Section.tsx
interface SectionProps {
    id: string;
    title: string;
  }
  
  export function Section({ id, title }: SectionProps) {
    return (
      <section
        id={id}
        className="h-screen flex items-center justify-center bg-gray-100 border-b"
      >
        <h2 className="text-3xl font-bold">{title}</h2>
      </section>
    );
  }