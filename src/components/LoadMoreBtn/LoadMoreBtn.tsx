import style from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button
      type="button"
      className={style.loadMoreBtn}
      onClick={() => onClick()}
    >
      Load more
    </button>
  );
}
