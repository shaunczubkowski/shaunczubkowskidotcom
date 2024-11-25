import { LuConstruction } from "react-icons/lu";
import AnimatedSection from "./layout/AnimatedSection";

const Projects = () => {
    return (
        <section className="h-auto pt-36 pb-5 text-text" id="projects">
            <AnimatedSection>
                <h3 className="text-4xl my-4 font-bold text-accent text-center">Projects</h3>

                <p className="flex items-center justify-center my-20"><LuConstruction color="yellow" className="mr-3" size={32} /><span className="text-2xl">Under Construction</span></p>
            </AnimatedSection>
        </section>
    );
}

export default Projects;