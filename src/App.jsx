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
    width: "600px",
    height: "auto",
    // backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    // padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="User Details Form"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        className="modal-overlay"
        // overlayClassName="modal-overlay"
      >
        <ModalForm />
      </Modal>
    </div>
  );
}
