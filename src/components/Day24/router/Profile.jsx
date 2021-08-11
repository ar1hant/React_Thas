import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Context from "../context/Auth";

function Profile() {
  const logger = useContext(Context);
  return (
    <div className="ReactRouter_profile">
      <Route>
        <div className="ReactRouter_profile-p">
          {logger.logged ? <h2>Profile</h2> : <Redirect to="/" />}
        </div>
      </Route>
    </div>
  );
}

export default Profile;