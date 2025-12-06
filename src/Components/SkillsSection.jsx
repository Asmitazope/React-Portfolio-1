import { useState } from "react";
import { clsName } from "@/lib/utills.js"


const skills = [
    { name: "C#", level: "80", category: "backend" },
    { name: "API", level: "70", category: "backend" },

    { name: "HTML/CSS", level: "80", category: "frontend" },
    { name: "Javascript", level: "80", category: "frontend" },
    { name: "Bootstrap", level: "80", category: "frontend" },
    { name: "ASP.NET", level: "80", category: "frontend" },
    { name: "HTML/CSS", level: "80", category: "frontend" },
    { name: "React", level: "80", category: "frontend" },

    { name: "Visual Studio", level: "80", category: "tools" },
    { name: "VSCode", level: "80", category: "tools" },
    { name: "GitHub", level: "80", category: "tools" },
    { name: "Postman", level: "80", category: "tools" },

]


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const categorys = ["all", "frontend", "backend", "tools"];

    const filteredSkills = skills.filter((skill) =>
        activeCategory == "all" || skill.category === activeCategory
    );


    return (
        <section id="skills " className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex-flex-wrap justify-center gap-4 mb-12">
                    {categorys.map((cat, key) => (
                        <button className={clsName("px-5 py-2 rounded-full",
                            "transition-colors duration-300 capitalize",
                            activeCategory === cat ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary/80 ",
                        )}

                            key={key}
                            onClick={() => setActiveCategory(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skills, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semi-bold text-lg">{skills.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out"
                                    style={{ width: skills.level + "%" }}>
                                </div>
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skills.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>)
}