import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types";

interface ImageGalleryProps {
  images: Image[];
  openModal: (imageUrl: string) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard image={image} openModal={openModal} />{" "}
        </li>
      ))}
    </ul>
  );
}
