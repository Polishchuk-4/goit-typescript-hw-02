import { IoIosSearch } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";
import style from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (topic: string) => void;
};

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const topic = (form.elements.namedItem("topic") as HTMLInputElement).value;

    if (topic.trim() === "") {
      toast("Please, input else value.", {
        icon: "ℹ️",
      });
      return;
    }
    onSubmit(topic);
    form.reset();
  };

  return (
    <header className={style.searchBarHeader}>
      <form onSubmit={handleSubmit} className={style.searchBarForm}>
        <button type="submit" className={style.searchBarBtn}>
          <IoIosSearch className={style.searchBarBtnIcon} />
        </button>
        <input
          className={style.searchBarInput}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster />
    </header>
  );
}
