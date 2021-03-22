import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dictionary from "../Components/Dictionary/Dictionary.wrap";
import { connect } from "react-redux";
import { checkUser } from '../redux/shared/actions'

function DictionaryPage({checkUserAction}) {
  let history = useHistory();
  const user = useSelector((state) => state.global.user);

console.log(!user && !checkUserAction())

console.log(user, checkUserAction())

  useEffect(() => {
    !user && !checkUserAction() && history.push("/");
  }, [checkUserAction, history, user]);

  return <Dictionary/>;
}

const actionCreators = {
  checkUserAction: checkUser,
};

export default connect(null, actionCreators)(DictionaryPage);
