import Button from "../../../shared/components/FormElements/Button";
import React, { Fragment } from "react";
import ReactDom from "react-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { CSSTransition } from "react-transition-group";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModelOverlay = (props) => {
  const history = useHistory();
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={`modal__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`modal__footer ${props.footerClass}`}>
          {props.footer}
          {props.addButton && (
            <Button onClick={() => history.goBack()}>Go Back</Button>
          )}
        </footer>
      </form>
    </div>
  );
  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <Fragment>
      {props.show && !props.addButton && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModelOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
