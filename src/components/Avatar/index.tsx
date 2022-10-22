import style from "./style.module.scss";

interface AvatarProps {
    src: string;
    alt: string;
    size?: 'small' | 'medium' | 'large';
}

const Avatar = ({ src, alt, size = 'medium' }: AvatarProps) => {

    const classes = ["avatar", size].join(" ");
        
    const customStyle = {
        width: size === 'small' ? '30px' : size === 'medium' ? '50px' : '100px',
        height: size === 'small' ? '30px' : size === 'medium' ? '50px' : '100px',
    };

    return (
        <div className={style[`avatar`]}
            style={{
                ...customStyle,
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
        </div>
    )
};

export default Avatar;