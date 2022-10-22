import { useRef } from "react";
import style from "./style.module.scss";

interface Props {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
    const modalRef = useRef(null);

    const handleModalClick = (e: any) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className={style["modal"]} ref={modalRef} onClick={handleModalClick}>
                    <div className={style["modal-content"]}>{children}</div>
                </div>
            )}
        </>
    );
};

export default Modal;