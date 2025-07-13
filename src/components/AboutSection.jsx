import { Code, Layers, ShieldCheck } from "lucide-react"


export const AboutSection = () => {

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Backend-Focused Software Engineer
                        </h3>
                        <p className="text-muted-foreground">
                            I'm a Computer Science and Software Engineering graduate with a strong focus on backend development using Java, Spring, and Spring Boot.
                            I've built secure REST APIs, automated data pipelines, and contributed to full-stack systems in both internship and personal projects.
                        </p>
                        <p className="text-muted-foreground">
                            My final-year project explored AI integration using local LLMs to assess academic documents for export compliance.
                        </p>
                        <p className="text-muted-foreground">
                            I'm passionate about writing clean, maintainable backend code and exploring new technologies and practical ways to integrate AI into real-world applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="custom-button">
                                {" "}
                                Get in Touch
                            </a>
                            <a href="Danielius_Grebliauskas_CV.pdf" target="_blank" className="px-6 py-2 inline-flex items-center justify-center rounded-md border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300">
                                {""}
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg">Backend Development</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        Building robust backend systems and REST APIs using Java, Spring Boot, and PostgreSQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Layers className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg">Full-Stack Engineering</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        End-to-end development with Spring Boot, React Native, and secure authentication workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ShieldCheck className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left ">
                                    <h4 className="font-semibold text-lg">Secure APIs & Auth</h4>
                                    <p className="text-muted-foreground">
                                        {" "}
                                        JWT auth, refresh tokens, and email verification for secure backend systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
