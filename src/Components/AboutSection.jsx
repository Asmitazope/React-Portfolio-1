import { Briefcase, Code, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export const AboutSection = () => {
    const ref = useRef(null);
    const [isvisible, SetVisible] = useState(false);
    useEffect(() => {
        const oberver = new IntersectionObserver(
            (entry) => {
                if (entry[0].isIntersecting) {
                    SetVisible(true);
                    oberver.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        oberver.observe(ref.current);
    }, [])

    return (
        <section  id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About<span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div ref={ref} className={`space-y-6 text-left transition-all duration-3000 
                    ${isvisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                        <h3 className="text-2xl font-semibold">Passionate Web & C# Developer</h3>
                        <p className="text-muted-foreground">
                            I’m a full-stack software developer with over 2 years of experience
                            building scalable, enterprise-grade applications using ASP.NET
                            MVC, SQL Server, and modern front-end technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy solving complex problems and delivering clean,
                            reliable, and high-performing solutions.
                        </p>

                        <div className="flex-flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>

                            <a href="" className="px-6 py-2 rounded-full border-primary text-primary 
                             hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>


                    <div ref={ref} className={`grid grid-cols-1 gap-6 transition-all duration-3000
                        ${isvisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-60"}`
                    }>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Experienced in C#, Python, HTML, CSS, JavaScript, Bootstrap, JSON, and XML.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">IT Support & Troubleshooting</h4>
                                    <p className="text-muted-foreground">
                                        Strong capability in technical support, issue resolution, and enterprise platform troubleshooting.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">API Development</h4>
                                    <p className="text-muted-foreground">
                                        Skilled in building REST APIs and working within Agile, cross-functional teams.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section >
    )
}