import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import { useState, useEffect } from "react";
import fetchImagesWithTopic from "../../images-api";
import { Image } from "../types";

import style from "./App.module.css";

function App() {
  const [gallery, setGallery] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [prevTopic, setPrevTopic] = useState<string>("");
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState<Image | string>("");

  useEffect(() => {
    async function getGallery() {
      if (prevTopic === "") {
        return;
      }
      try {
        setError(false);
        setLoading(true);
        setGallery([]);

        const response: Image[] = await fetchImagesWithTopic(prevTopic, page);

        setGallery([...gallery, ...response]);

        if (response.length === 0) {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getGallery();
  }, [page, prevTopic]);

  const handleSearch = async (topic: string) => {
    setError(false);
    setLoading(false);
    setPage(1);
    setGallery([]);
    setPrevTopic(topic);
  };

  const handleLoadMore = async () => {
    setPage((page) => page + 1);
  };

  function openModal(img: Image) {
    setModalImg(img);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setModalImg("");
  }
  return (
    <div className={style.app}>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery gallery={gallery} openModal={openModal} />
      {gallery.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && typeof modalImg !== "string" && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          imgUrl={modalImg.urls.regular}
          imgDescription={modalImg.alt_description}
          imgLikes={modalImg.likes}
          imgCreated={modalImg.created_at}
        />
      )}
    </div>
  );
}
export default App;
