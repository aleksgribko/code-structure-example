import React, { useState, useEffect } from "react";
import Dictionary from "./Dictionary";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { searchWord } from "./dictionary.actions";
import { signOut } from "./../../redux/shared/actions"

function DictionaryWrap({ searchWordAction, signOutAction }) {
  const [enteredWord, setEnteredWord] = useState("");
  const [error, setError] = useState("");

  const word = useSelector((state) => state.global.word);


  const handleSearchWord = async () => {
    const res = await searchWordAction(enteredWord);
    if (!res) setError("error");
  };

  const handleEditWord = (word) => {
    setEnteredWord(word)
  }

  const handleSignOut = () => {
    signOutAction()
  }

  useEffect(() => {
    setError(null)
  }, [word])

  return (
    <Dictionary
      error={error}
      handleSearchWord={handleSearchWord}
      handleEditWord={handleEditWord}
      handleSignOut={handleSignOut}
    />
  );
}

const actionCreators = {
  searchWordAction: searchWord,
  signOutAction: signOut,

};

export default connect(null, actionCreators)(DictionaryWrap);
