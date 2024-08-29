import Modal from "react-modal";

import { format } from "date-fns";

import style from "./ImageModal.module.css";
const customStyles = {
  content: {
    width: "80vw",
    height: "80vh",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "start",
    padding: "0",
  },
  overlay: {
    backgroundColor: "rgba(32, 32, 32, 0.75)",
  },
};

Modal.setAppElement("#root");

type ImageModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  imgUrl: string;
  imgDescription: string;
  imgLikes: number;
  imgCreated: string;
};

export default function ImageModal({
  isOpen,
  closeModal,
  imgUrl,
  imgDescription,
  imgLikes,
  imgCreated,
}: ImageModalProps) {
  const date = new Date(imgCreated as string);
  const formattedDate: string = format(date, "dd.MM.yyyy");

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={imgUrl} alt={imgDescription} className={style.img} />
      <p className={style.modalText}>
        Likes: {imgLikes} || Created: {formattedDate}
      </p>
    </Modal>
  );
}
