import Card from "../../../components/Card"
import { useStore } from "../../../store";
import style from "./style.module.scss";
import shallow from "zustand/shallow";


const Experiences = () => {

    const { experiences } = useStore(state => state, shallow);


    const calculateDate = (start_date: Date, end_date: Date) => {

        const start = new Date(start_date);
        const end = new Date(end_date);


        const startYear = start.getFullYear();
        const endYear = end.getFullYear();

        if (startYear === endYear) {
            return `${startYear}`;
        };

        return `${startYear} - ${endYear}`;

    }
    return (
        <Card>
            <h1>Experience</h1>
            <ul className={style["experiences"]}>
                {experiences.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{calculateDate(item.start_date, item.end_date)}</p>
                    </li>
                ))}
            </ul>
        </Card>

    )
};

export default Experiences;