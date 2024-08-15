interface ImageCardProps {
  imageItem: {
    urls: { small: string; regular: string };
    alt_description: string;
  };
  openModal: (imageUrl: string) => void;
}

export default function ImageCard({
  imageItem: {
    urls: { small, regular },
    alt_description,
  },
  openModal,
}: ImageCardProps) {
  return (
    <div>
      <img
        src={small}
        alt={alt_description}
        onClick={() => openModal(regular)}
      />
    </div>
  );
}

// export default function ImageCard({
//   imageItem: {
//     urls: { small, regular },
//     alt_description,
//   },
//   openModal,
// }) {
//   return (
//     <div>
//       <img
//         src={small}
//         alt={alt_description}
//         onClick={() => openModal(regular)}
//       />
//     </div>
//   );
// }
