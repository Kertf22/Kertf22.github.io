import style from "./style.module.scss";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}


const Card = ({ children, className, ...props }: CardProps) => {
    return (
        <div className={style[`card`]} {...props}>
            {children}
        </div>
    );
};

export default Card;