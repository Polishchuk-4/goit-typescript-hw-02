import style from "./ImageCard.module.css";

type Props = {
  url: string;
  description: string;
  openModal: () => void;
};

export default function ImageCard({ url, description, openModal }: Props) {
  return (
    <div className={style.imageCard}>
      <img
        onClick={openModal}
        src={url}
        alt={description}
        className={style.imageCardImg}
      />
    </div>
  );
}
