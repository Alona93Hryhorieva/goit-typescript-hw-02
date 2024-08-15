import { Image } from "../../types";

interface ImageCardProps {
  image: Image;
  openModal: (imageUrl: string) => void;
}

export default function ImageCard({ image, openModal }: ImageCardProps) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image.urls.regular)}
      />
    </div>
  );
}
