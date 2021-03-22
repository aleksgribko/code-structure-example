import React from "react";
import styles from "./Dictionary.module.scss";
import { TextField, Button } from "@material-ui/core";
import DictionaryWord from "./DictionaryWord/DictionaryWord";

function Dictionary({ error, handleSearchWord, handleEditWord, handleSignOut }) {
  return (
    <div className={styles.dictionary}>
      <form className={styles.dictionary__form} noValidate autoComplete="off">
        <h1>Search a word</h1>
        <TextField
          id="outlined-basic"
          label="Word"
          variant="outlined"
          onChange={(e) => handleEditWord(e.target.value)}
        />
        {error ? (
          <span className={styles.dictionary__error}>{error}</span>
        ) : null}
        <Button
          className={styles.dictionary__button}
          variant="contained"
          color="primary"
          onClick={handleSearchWord}
        >
          Search
        </Button>
        <Button
          className={styles.dictionary__button}
          variant="contained"
          color="secondary"
          onClick={handleSignOut}
        >
          Sign out
        </Button>
      </form>
      <DictionaryWord />
    </div>
  );
}

export default Dictionary;
