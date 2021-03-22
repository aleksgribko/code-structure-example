import React from "react";
import styles from "./Home.module.scss";
import { TextField, Button } from "@material-ui/core";

export default function Home({ validateName, handleChangeName }) {
  return (
    <div className={styles.home}>
      <form className={styles.home__form} noValidate autoComplete="off">
        <h1>Enter your name</h1>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => handleChangeName(e.target.value)}
        />
        <Button className={styles.home__button} variant="contained" color="primary" onClick={validateName}>
          Validate
        </Button>
      </form>
    </div>
  );
}
