import { useState } from "react";
import Modal from "react-modal";

function Popup() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              width: "300px",
              margin: "auto",
              padding: "20px",
              borderRadius: "10px",
            },
          }}
        >
          <h2>React Modal</h2>
          <p>This is a custom popup using react-modal.</p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      </div>
    </>
  );
}

export default Popup;
