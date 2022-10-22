import Card from "../../../components/Card"
import style from "./style.module.scss";

interface ExperiencesProps {
    experiences: Array<{
        name: string;
        description: string;
        date: string;
    }>
}


const Experiences = ({ experiences }: ExperiencesProps) => {

    return (
        <Card>
            <h1>Experience</h1>
            <ul className={style["experiences"]}>
                {experiences.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.date}</p>
                    </li>
                ))}
            </ul>
        </Card>

    )
};

export default Experiences;