import { ReactNode, useEffect } from "react";
import Button from "./button";
import IconClose from "../assets/icons/close-icon";

type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  size?: "lg" | "sm";
};

const Modal = ({
  children,
  title,
  isOpen,
  onClose,
  onSuccess,
  size = "lg",
}: ModalProps) => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName(
      "body"
    )[0] as HTMLBodyElement;
    if (isOpen) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "auto";
    }
    return () => {
      console.log("test");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div>
          <div className="modal__overlay" onClick={() => onClose()}></div>
          <div className={`modal ${size === "sm" ? "modal--sm" : ""}`}>
            <div className="modal__header">
              <div className="modal__header__title">{title}</div>
              <IconClose className="modal__header__icon" onClick={onClose} />
            </div>
            <div className="modal__body">{children}</div>
            <div className="modal__footer">
              {onSuccess && <Button onClick={onSuccess} text="Ok" />}
              <Button text="Cancel" color="red" onClick={onClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
