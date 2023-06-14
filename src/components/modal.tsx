import { ReactNode } from "react";
import Button from "./button";

type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
};

const Modal = ({ children, title, isOpen = false }: ModalProps) => {
  return (
    <>
      <div className="modal__overlay" onClick={setModalOpen(false)}></div>
      <div className="modal">
        <div className="modal__header">
          <span className="modal__header__txt">{title}</span>
          <div className="modal__header__close">X</div>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <Button text="Click me!" />
          <Button text="Clicke me too!" />
        </div>
      </div>
    </>
  );
};

export default Modal;
