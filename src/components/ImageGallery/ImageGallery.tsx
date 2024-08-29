import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

import { Image } from "../types";

type ImageGalleryProps = {
  gallery: Image[];
  openModal: (image: Image) => void;
};

export default function ImageGallery({
  gallery,
  openModal,
}: ImageGalleryProps) {
  return (
    <ul className={style.imageGallery}>
      {gallery.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard
              url={image.urls.small}
              description={image.alt_description}
              openModal={() => openModal(image)}
            />
          </li>
        );
      })}
    </ul>
  );
}
