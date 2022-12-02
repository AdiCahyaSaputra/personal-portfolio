import AboutSection from "./components/section/AboutSection"
import FooterSection from "./components/section/FooterSection"
import HeroSection from "./components/section/HeroSection"
import ProjectSection from "./components/section/ProjectSection"
import SkillSection from "./components/section/SkillSection"
import ScrollObserver from "./context/scroll-observer"

const App = () => {
  return (
    <ScrollObserver>
      <div className="select-none">
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <FooterSection />
      </div>
    </ScrollObserver>
  )
}

export default App
