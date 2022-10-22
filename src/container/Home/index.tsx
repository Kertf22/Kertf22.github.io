import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import Experiences from "./Experiences";
import Profile from "./Profile";
import Skills from "./Skills";
import SocialMedias from "./SocialMedias";


const HomeContainer = () => {

    const userInfo = {
        name: 'Paulo',
        age: 20,
        function: 'Developer',
        description: 'I am a developer',
        contry: 'Brazil',
        avatar: 'https://avatars.githubusercontent.com/u/54643500?v=4',
        socialMedia: [
            {
                name: 'Github',
                url: ''
            },
            {
                name: 'Linkedin',
                url: ''
            },
            {
                gmail: 'Gmail',
                url: ''
            }
        ],
        techs: [
            {
                name: 'React',
            },
            {
                name: 'React Native',
            },
            {
                name: 'Node',
            }
        ],
        experiences: [
            {
                name: 'Company 1',
                description: 'I worked in this company',
                date: '2020 - 2021'
            },
            {
                name: 'Company 2',
                description: 'I worked in this company',
                date: '2020 - 2021'
            },
            {
                name: 'Company 3',
                description: 'I worked in this company',
                date: '2020 - 2021'
            }
        ],
        projects: [
            {
                name: 'Project 1',
                description: 'I worked in this project',
                date: '2020 - 2021'
            },
            {
                name: 'Project 2',
                description: 'I worked in this project',
                date: '2020 - 2021'
            },
        ]
    };


    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: "320px" }}>
                <Profile userInfo={userInfo} />
                <SocialMedias socialMedias={userInfo.socialMedia} />
                <Skills techs={userInfo.techs} />
                <Experiences experiences={userInfo.experiences} />
            </div>
        </div >
    )

};

export default HomeContainer