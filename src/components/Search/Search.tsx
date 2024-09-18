import { ReactComponent as SearchIcon } from "assets/icon-search.svg";

import styles from "./Search.module.scss";
import { Button } from "components/Button";
// import { useRef } from "react";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // const searchRef = useRef<HTMLInputElement | null>(null);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
    // const text = searchRef.current ? searchRef.current.value : "";

    // if (text) {
    //   onSubmit(text);
    //   if (searchRef.current) searchRef.current.value = "";
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.search}>
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input
          // ref={searchRef}
          type="text"
          placeholder="Search GitHub username..."
          name="username"
          id="search"
          className={styles.textField}
        />
        <Button>Search</Button>
        {hasError && <span className={styles.error}>No result</span>}
      </div>
    </form>
  );
};
