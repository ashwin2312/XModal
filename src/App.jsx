import React, { useState } from "react";
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
    width: "auto",
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
    PointerEvents: "none",
  },
};

Modal.setAppElement("#root");

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div id="root">
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="User Details Form"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div className="modal">
          <div className="modal-content">
            <ModalForm />
          </div>
        </div>
      </Modal>
    </div>
  );
}
