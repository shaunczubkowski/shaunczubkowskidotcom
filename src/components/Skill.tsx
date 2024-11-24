export interface SkillProps {
    text: string;
    icon: JSX.Element;
}


const Skill: React.FC<SkillProps> = ({ text, icon }) => {
    return (
        <div className="flex flex-col items-center my-6">
            {icon}
            <h4 className="font-semibold text-center">{text}</h4>
        </div>
    )
}

export default Skill;