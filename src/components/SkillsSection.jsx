import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", level: 50, category: "frontend" },
    { name: "JavaScript", level: 60, category: "frontend" },
    { name: "TypeScript", level: 50, category: "frontend" },
    { name: "React", level: 55, category: "frontend" },
    { name: "React Native", level: 60, category: "frontend" },
    { name: "Tailwind CSS", level: 50, category: "frontend" },
    { name: "Vite", level: 40, category: "frontend" },

    // Backend
    { name: "Java", level: 90, category: "backend" },
    { name: "Spring Boot", level: 90, category: "backend" },
    { name: "Spring", level: 85, category: "backend" },
    { name: "Node.js", level: 60, category: "backend" },
    { name: "Express", level: 60, category: "backend" },
    { name: "Python", level: 65, category: "backend" },

    // Databases
    { name: "PostgreSQL", level: 70, category: "database" },
    { name: "MongoDB", level: 60, category: "database" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 50, category: "tools" },
    { name: "Postman", level: 90, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Flyway", level: 50, category: "tools" },
    { name: "JUnit5", level: 70, category: "tools" },
    { name: "CI/CD (GitHub Actions)", level: 50, category: "tools" },
    { name: "Expo", level: 55, category: "tools" },


    // AI / Other
    { name: "GPT-4All", level: 40, category: "other" },
    { name: "Doc2Vec", level: 35, category: "other" },
    { name: "BeautifulSoup", level: 50, category: "other" },
];

const categories = ["all", "frontend", "backend", "database", "tools", "other"];

export const SkillsSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="conatiner mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                    style={{width: skill.level + "%"}}
                                />
                            </div>

                            <div className="text-right mt-1"> 
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>    
        </section>
    )
}