import Avatar from "../../../components/Avatar";
import Card from "../../../components/Card"
import { useStore } from "../../../store";
import style from "./style.module.scss";
import shallow from "zustand/shallow";


const Profile = () => {

    const { user } = useStore(state => state, shallow);

    if (!user) return null;

    return (
        <Card>
            <div className={style["user-info"]}>
                <Avatar
                    src={user.avatar}
                    alt="Paulo"
                    size="large"
                />

                <div className={style["user-info__content"]}>
                    <h1>{user.name}</h1>
                    <h2>{user.function}</h2>
                    <p>{user.description}</p>
                </div>
            </div>
        </Card>
    )
};

export default Profile;