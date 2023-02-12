import { createPortal } from "react-dom";

const ModalPotal = ({ children }) => {
  const el = document.getElementById("modal");
  return createPortal(children, el);
};

export default ModalPotal;
