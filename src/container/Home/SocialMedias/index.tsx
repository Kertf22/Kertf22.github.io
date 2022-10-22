import Card from "../../../components/Card"
import { useStore } from "../../../store";
import getIcons from "../../../util/getIcons";
import style from "./style.module.scss";
import shallow from "zustand/shallow"

const SocialMedias = () => {

    const { socialMedias, user } = useStore(state => state, shallow);


    return (
        <Card>
            <ul className={style["social-media"]}>


                {
                    // Here I will place some personal information 
                    // about me and my social medias
                }
                <li>
                    {getIcons("Location")} <span>{user?.country}</span>
                </li>

                {socialMedias.map((item, index) => (
                    <li key={index}>
                        <>
                            {getIcons(item.name)}
                            <a href={item.url}> {item.name}</a>
                        </>
                    </li>
                ))}
            </ul>
        </Card>
    )
};

export default SocialMedias;