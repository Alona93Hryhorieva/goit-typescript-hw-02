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
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "transparent",
          padding: "0",
          margin: "0",
        },
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Selected"
          style={{ maxWidth: "75%", maxHeight: "75%" }}
        />
      )}
    </Modal>
  );
}

// import Modal from "react-modal";

// export default function ImageModal({ isOpen, closeModal, imageUrl }) {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       shouldCloseOnOverlayClick={true} // Закриваємо модалку при кліці на бекдропі
//       contentLabel="Large Image Modal"
//       ariaHideApp={false}
//       style={{
//         overlay: {
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           zIndex: 1000,
//           cursor: "pointer",
//         },
//         content: {
//           top: "50%",
//           left: "50%",
//           right: "auto",
//           bottom: "auto",
//           transform: "translate(-50%, -50%)",
//           border: "none",
//           background: "transparent",
//         },
//       }}
//     >
//       <>
//         <img
//           src={imageUrl}
//           alt="Selected"
//           style={{ maxWidth: "75%", maxHeight: "75%" }}
//         />
//       </>
//     </Modal>
//   );
// }
