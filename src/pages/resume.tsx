import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import Education from "@/features/Resume/Education/Education";
import Home from "@/features/Resume/Home/Home";
import Skill from "@/features/Resume/Skill/Skill";
import Project from "@/features/Resume/Project/Project";

export default function Resume() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Education />
        <Skill />
        <Project />
      </main>
      <Footer />
    </>
  );
}
