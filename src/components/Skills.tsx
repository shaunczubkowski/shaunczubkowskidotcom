import { TbBrandMixpanel } from "react-icons/tb";
import Skill from "./Skill";
import { BiLogoAngular, BiLogoAws, BiLogoCss3, BiLogoFigma, BiLogoGraphql, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTailwindCss, BiLogoTypescript, BiTestTube } from "react-icons/bi";
import { SiDatadog, SiJenkins, SiMixpanel, SiStorybook } from "react-icons/si";
import { GoCopilot } from "react-icons/go";
import { FaGear, FaGears } from "react-icons/fa6";
import { GrTest } from "react-icons/gr";
import { GiTeamIdea } from "react-icons/gi";
import AnimatedSection from "./layout/AnimatedSection";

const SIZE = 128;


const skills = [
    {
        text: "HTML",
        icon: <BiLogoHtml5 size={SIZE} color="#fe5326" />
    },
    {
        text: "CSS",
        icon: <BiLogoCss3 size={SIZE} color="#2d53e4" />
    },
    {
        text: "JavaScript",
        icon: <BiLogoJavascript size={SIZE} color="#f7df1d" />
    },
    {
        text: "TypeScript",
        icon: <BiLogoTypescript size={SIZE} color="#2f74c1" />
    },
    {
        text: "React",
        icon: <BiLogoReact size={SIZE} color="#4dc2d2" />
    },
    {
        text: "Team Collaboration",
        icon: <GiTeamIdea size={SIZE} color="#f6f383" />
    },
    {
        text: "Infrastructure as Code",
        icon: <FaGears size={SIZE} color="#b2cd31" />
    },
    {
        text: "TailwindCSS",
        icon: <BiLogoTailwindCss size={SIZE} color="#3e99c3" />
    },
    {
        text: "SASS",
        icon: <BiLogoSass size={SIZE} color="#d16397" />
    },
    {
        text: "GraphQL",
        icon: <BiLogoGraphql size={SIZE} color="#de33a5" />
    },
    {
        text: "Java",
        icon: <BiLogoJava size={SIZE} color="#ce2b33" />
    },
    {
        text: "Figma",
        icon: <BiLogoFigma size={SIZE} color="#29c872" />
    },
    {
        text: "Mixpanel",
        icon: <SiMixpanel size={SIZE} color="#7459f3" />
    },
    {
        text: "Angular",
        icon: <BiLogoAngular size={SIZE} color="#d6032e" />
    },
    {
        text: "DataDog",
        icon: <SiDatadog size={SIZE} color="#6729a0" />
    },
    {
        text: "GitHub Copilot",
        icon: <GoCopilot size={SIZE} color="#fff" />
    },
    {
        text: "Jenkins",
        icon: <SiJenkins size={SIZE} color="#91b9bb" />
    },
    {
        text: "AWS",
        icon: <BiLogoAws size={SIZE} color="#fa9203" />
    },
    {
        text: "Storybook",
        icon: <SiStorybook size={SIZE} color="#f74581" />
    },
    {
        text: "Testing",
        icon: <GrTest size={SIZE} color="#c597d1" />
    },
]

export default function Skills() {
    return (
        <section className="h-auto pt-40 pb-5 text-text" id="skills">
            <AnimatedSection>
                <h3 className="text-4xl my-4 font-bold text-accent text-center">Skills</h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 place-items-center">
                    {
                        skills.map(skill => (
                            <Skill {...skill} />
                        ))
                    }
                </div>
            </AnimatedSection>
        </section>
    );
};