import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ModalForm from "./components/ModalForm";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    height: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.444)",
  },
};

Modal.setAppElement("#root");

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setModalIsOpen(false);
  //     }
  //   };

  //   if (modalIsOpen) {
  //     document.addEventListener("click", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [modalIsOpen]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <div className="modal">
        <div className="modal-content">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="User Details Form"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true} // For custom close behavior
            className="modal-overlay"
            // overlayClassName="modal-overlay"
          >
            {/* <div ref={modalRef}>
            </div> */}
            <ModalForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}
