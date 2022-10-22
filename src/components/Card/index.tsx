import style from "./style.module.scss";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    styles?: React.CSSProperties;
}


const Card = ({ children, className, styles,...props }: CardProps) => {
    return (
        <div className={style[`card`]} {...props} style={{...styles}}> 
            {children}
        </div>
    );
};

export default Card;