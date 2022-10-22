import { FaLinkedinIn, FaGithub, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";


const getIcons = (name: string) => {
    switch (name) {
        case 'Linkedin':
            return <FaLinkedinIn />;
        case 'Github':
            return <FaGithub />;
        case 'Twitter':
            return <FaTwitter />;
        case 'Gmail':
            return <SiGmail />;
        case 'Location':
            return <FaMapMarkerAlt />;
        default:
            return null;
    }
};

export default getIcons;