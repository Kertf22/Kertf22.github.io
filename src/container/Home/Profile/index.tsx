import Avatar from "../../../components/Avatar";
import Card from "../../../components/Card"
import style from "./style.module.scss";



const Profile = ({ userInfo }: { userInfo: any }) => {

    return (
        <Card>
            <div className={style["user-info"]}>
                <Avatar
                    src="https://avatars.githubusercontent.com/u/70054149?v=4"
                    alt="Paulo"
                    size="large"
                />

                <div className={style["user-info__content"]}>
                    <h1>Paulo Hercílio</h1>
                    <h2>Developer</h2>
                    <p>I am a developer</p>
                    <p>Brazil</p>
                </div>
            </div>
        </Card>
    )
};

export default Profile;