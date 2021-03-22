import React, { useEffect } from "react";
import Home from "../Components/Home/Home.wrap.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkUser } from '../redux/shared/actions'
import { connect } from "react-redux";

function HomePage({checkUserAction}) {
  let history = useHistory();
  const user = useSelector((state) => state.global.user);

  useEffect(() => {
    (user || checkUserAction()) && history.push("/dictionary");
  }, [checkUserAction, history, user]);

  return <Home />;
}

const actionCreators = {
  checkUserAction: checkUser,
};

export default connect(null, actionCreators)(HomePage);
