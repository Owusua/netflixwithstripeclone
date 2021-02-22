import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              {/*<p className="profileScreen__renewal">Renewal Date: 04/03/2021</p>
              <div className="profileScreen__planTypes">
                <div className="profileScreen__planDetails">
                  <span>
                    Netflix Standard <br />
                    1080p
                  </span>
                  <button className="profileScreen__subscribe">
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__planDetails">
                  <span>
                    Netflix Basic <br /> 400p
                  </span>
                  <button className="profileScreen__subscribe">
                    Subscribe
                  </button>
                </div>
                <div className="profileScreen__planDetails">
                  <span>
                    Netflix Premium
                    <br />
                    4k+HDR
                  </span>
                  <button className="profileScreen__currentPackage">
                    {" "}
                    Current Package
                  </button>
                </div>
              </div>*/}
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
