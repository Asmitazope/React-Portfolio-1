import { Star } from "lucide-react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import { Navbar } from "../Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectSection } from "../Components/ProjectSection";
import { ContactSection } from "../Components/ContactSection";
import { FooterSection } from "../Components/FooterSection";

export default function Home() {
    return (
        <>
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

                {/* Theme Effect */}
                <ThemeToggle />

                {/* Background Effect */}
                <StarBackground />

                {/* Navbar */}
                <Navbar />

                {/* Main Content */}

                <main>
                    <HeroSection />

                    <AboutSection />

                    <SkillsSection />

                    <ProjectSection />

                    <ContactSection />

                </main>

                {/* Footer */}
                <FooterSection />


            </div>

        </>
    )
}