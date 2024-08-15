import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../../types"; // Переконайтесь, що у вас є відповідний тип Image

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
          <ImageCard imageItem={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

// import ImageCard from "../ImageCard/ImageCard";
// import css from "./ImageGallery.module.css";

// export default function ImageGallery({ images, openModal }) {
//   if (images.length === 0) {
//     return null;
//   }

//   return (
//     <ul className={css.list}>
//       {images.map((image) => (
//         <li key={image.id}>
//           <ImageCard imageItem={image} openModal={openModal} />
//         </li>
//       ))}
//     </ul>
//   );
// }
