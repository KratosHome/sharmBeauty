import * as React from "react";
import md from "./MayModal.module.css";
import "./MayModaT.css";
import "animate.css";
import { CSSTransition } from 'react-transition-group';

interface TodoListProps {
  visible: boolean;
  setVisible: any;
}

export const MayModal: React.FC<TodoListProps> = ({
  children,
  visible,
  setVisible,
}) => {
  const rootClasses = [md.myModal];

  if (visible === true) {
    rootClasses.push(md.active);
  }

  return (
    <>
      <CSSTransition
        in={visible}
        timeout={500}
        classNames={{
          exitActive: "animate__animated animate__flipOutX",
        }}
        mountOnEnter
        unmountOnExit
      >
        <div
          className={visible ? "myModal active " : "myModal"}
          onClick={() => setVisible(false)}
        >
          <div className="animate__animated animate__flipInX">
            <div
              className={md.myModalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={md.buttomCloseModal}
                onClick={() => setVisible(false)}
              >
                x
              </button>
              {children}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
