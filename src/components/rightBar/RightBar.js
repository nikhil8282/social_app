import React from "react";
import Profile from "../../images/profile_img.webp";

import "./rightBar.scss";
function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>suggestion For You</span>
          <div className="users">
            <div className="usersInfo">
              <img src={Profile} alt="" />
              <span>Gopal Das</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="users">
            <div className="usersInfo">
              <img src={Profile} alt="" />

              <span>Gopal Das</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>latest activities</span>
          <div className="users">
            <div className="usersInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Gopal Das</span>
                liked your posts
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="users">
            <div className="usersInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Gopal Das</span>
                liked your posts
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="users">
            <div className="usersInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Gopal Das</span>
                liked your posts
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="users">
            <div className="usersInfo">
              <img src={Profile} alt="" />
              <p>
                <span>Gopal Das</span>
                liked your posts
              </p>
            </div>
            <span>1 min ago</span>
          </div>
</div>
          <div className="item">
            <span>Active people</span>
            <div className="users">
              <div className="usersInfo">
                <img src={Profile} alt="" />
                <div className="active-dot" />
                <span>Gopal Das</span>
              </div>
            </div>
            <div className="users">
              <div className="usersInfo">
                <img src={Profile} alt="" />
                <div className="active-dot" />
                <span>Gopal Das</span>
              </div>
            </div>
            <div className="users">
              <div className="usersInfo">
                <img src={Profile} alt="" />
                <div className="active-dot" />
                <span>Gopal Das</span>
              </div>
            </div>
            <div className="users">
              <div className="usersInfo">
                <img src={Profile} alt="" />
                <div className="active-dot" />
                <span>Gopal Das</span>
              </div>
            </div>
            <div className="users">
              <div className="usersInfo">
                <img src={Profile} alt="" />
                <div className="active-dot" />
                <span>Gopal Das</span>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default RightBar;
