import Image from "next/image";
import { AppLayout } from "@/components/layout/app-layout";
import { Home } from "@/components/Home";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { TrainingAttended } from "@/components/Training-Attended";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Project } from "@/components/Project";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <AppLayout>
      {/* Home Section */}
      <Home />
      {/* About Section */}
      <About />
      {/* Experience Section */}
      <Experience />
      {/* Projects Section */}
      <Project />
      {/* Training Section */}
      <TrainingAttended />
      {/* Skills Section */}
      <Skills />
      {/* Education Section */}
      <Education />
      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </AppLayout>
  );
}
