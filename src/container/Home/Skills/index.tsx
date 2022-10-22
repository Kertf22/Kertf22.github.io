import Card from "../../../components/Card"
import { useStore } from "../../../store";
import style from "./style.module.scss";
import shallow from "zustand/shallow"

const Skills = () => {
    const { techs } = useStore(state => state, shallow);

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