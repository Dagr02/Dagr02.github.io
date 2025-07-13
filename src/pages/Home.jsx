import { AboutSection } from "../components/AboutSection"
import { AuroraBackground } from "../components/AuroraBackground"
import { ContactSection } from "../components/ContactSection"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { ThemeToggle } from "../components/ThemeToggle"



export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*Background*/}
            {/* <AuroraBackground /> */}
            {/*Theme Toggle*/}
            <ThemeToggle />
            {/*Navbar*/}
            <NavBar />
            {/* Main content */}
            <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            {/* Footer */}
        </div>
    )
}