import React, { useState } from "react";
import Home from "./Home";
import { setUser } from "../../redux/shared/actions";
import { connect } from "react-redux";

function HomeWrap({ setUserAction }) {
  const [name, setName] = useState("");

  const handleChangeName = (name) => {
    setName(name);
  };

  const validateName = () => {
    name.length && setUserAction(name);
  };
  return (
    <Home validateName={validateName} handleChangeName={handleChangeName} />
  );
}

const actionCreators = {
  setUserAction: setUser,
};

export default connect(null, actionCreators)(HomeWrap);
