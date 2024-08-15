import Modal from "react-modal";

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  imageUrl: string | null;
}

export default function ImageModal({
  isOpen,
  closeModal,
  imageUrl,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Large Image Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
          cursor: "pointer",
        },
        content: {
          position: "absolute",
          inset: "50% auto auto 50%",
          // top: "50%",
          // left: "50%",
          // right: "auto",
          // bottom: "auto",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "transparent",
          overflow: "auto",
          borderRadius: "4px",
          padding: "0px",
          margin: "0px",
        },
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Selected"
          // style={{ maxWidth: "75%", maxHeight: "75%" }}
        />
      )}
    </Modal>
  );
}
