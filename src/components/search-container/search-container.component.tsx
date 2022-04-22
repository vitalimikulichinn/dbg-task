import React, { useCallback, useState } from "react";
import styles from "../../../styles/Weather.module.scss";
import { useIsMobile } from "../../hooks/useIsMobile";
import { SearchIcon } from "../../icons/searchIcon";
import { Button } from "../shared/button/button.component";
import { Input } from "../shared/input/input.component";

interface SearchContainerProps {
  search: (value: string) => void;
}

export const SearchContainer: React.FC<SearchContainerProps> = React.memo(
  ({ search }) => {
    const [query, setQuery] = useState<string>("");
    const isMobile = useIsMobile();

    const handleChange = useCallback((value: string) => {
      setQuery(value);
    }, []);

    const searchHandler = () => {
      if (query.length) {
        search(query);
      }
    };

    return (
      <div className={styles.searchContainer}>
        <div className={styles.inputWrapper}>
          <Input value={query} onChange={handleChange} />
        </div>
        <Button
          text={!isMobile ? "Search" : ""}
          icon={() => <SearchIcon />}
          filled
          className={isMobile ? styles.smallScreenButton : ""}
          onClick={searchHandler}
        />
      </div>
    );
  }
);

SearchContainer.displayName = "SearchContainer";
