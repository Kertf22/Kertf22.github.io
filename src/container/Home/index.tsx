import Experiences from "./Experiences";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import SocialMedias from "./SocialMedias";


const HomeContainer = () => {
    return (
        <div style={{ width: "100%", display: 'flex' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: "420px" }}>
                <Profile />
                <SocialMedias  />
                <Skills  />
                <Experiences />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: "100%" }}>
                <Projects />
            </div>
        </div >
    )

};

export default HomeContainer