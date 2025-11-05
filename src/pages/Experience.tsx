import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { experiences } from "@/data/experience";

const Experience = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Experience"
              subtitle="My professional journey in software quality assurance"
            />

            <div className="mx-auto max-w-4xl">
              <Timeline experiences={experiences} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
