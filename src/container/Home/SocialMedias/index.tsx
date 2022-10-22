import Card from "../../../components/Card"
import style from "./style.module.scss";

interface SocialMediasProps {
    socialMedias: any[]
}

const SocialMedias = ({ socialMedias }: SocialMediasProps) => {

    return (
        <Card>
            <ul className={style["social-media"]}>
                {socialMedias.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </Card>
    )
};

export default SocialMedias;