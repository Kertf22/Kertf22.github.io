import Card from "../../../components/Card"
import style from "./style.module.scss";

interface SkillsProps {
    techs: any[]
}
const Skills = ({ techs }: SkillsProps) => {

    return (
        <Card>
            <h1>Skills</h1>
            <ul className={style["skills"]}>
                {techs.map((item, index) => (
                    <li key={index}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </Card>

    )
};

export default Skills;