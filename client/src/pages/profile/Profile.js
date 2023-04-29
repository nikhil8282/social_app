import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { authContext } from "../../context/authContext";

import Update from "../../components/update/Update";
import Posts from "../../components/posts/Posts";

function Profile() {
  const [isupdate, setisupdate] = useState(false);
  const [coverBox, setcoverBox] = useState(false);
  const [profileBox, setprofileBox] = useState(false);
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { user, getUser } = useContext(authContext);
  const { username, name, email, coverPic, profilePic } = user;

  const [file, setFile] = useState(null);
  // console.log(user)
  // fetch data of user
  console.log(user);
  const { isloading, error, data } = useQuery(["user", id], () => {
    return makeRequest.get(`/user/${id}`).then((res) => res.data);
  });

  // code to handle post and delete request for follow and unfollow method
  const relationMutation = useMutation(
    (isFollow) => {
      if (isFollow) return makeRequest.delete("/relation?userId=" + id);
      return makeRequest.post("/relation?userId=" + id);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["relation"]);
      },
    }
  );

  // function to handle follow or unfollow method
  const handleClick = (e) => {
    e.preventDefault();
    relationMutation.mutate(followedIds.includes(+id));
  };

  // fetch relation data of user
  const { data: followedIds } = useQuery(["relation"], () =>
    makeRequest.get("/relation").then((res) => res.data)
  );

  // handle to change profile pic
  const handleClickUpdateProfile = async (e) => {
    e.preventDefault();
    let fileName = "";
    if (file) fileName = await upload();
    console.log(fileName);
    userMutation.mutate({
      username,
      name,
      email,
      coverPic,
      profilePic: fileName,
    });
    getUser(user.id);
    setcoverBox(!coverBox);
  };

  // handle to change cover pic
  const handleClickUpdateCover = async (e) => {
    e.preventDefault();
    let fileName = "";
    if (file) fileName = await upload();
    userMutation.mutate({
      username,
      name,
      email,
      coverPic: fileName,
      profilePic,
    });
    getUser(user.id);
    setprofileBox(!profileBox);
  };

  const upload = async () => {
    try {
      const newform = new FormData();
      newform.append("file", file);
      const res = await makeRequest.post("/upload", newform);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const userMutation = useMutation((p) => makeRequest.put("/user/update", p), {
    onSuccess: () => {
      queryClient.invalidateQueries(["user", id]);
    },
  });

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  // show update box handle
  const showUpdate = () => {
    setisupdate(!isupdate);
  };

  return (
    <div className="profile">
      {error ? (
        "error"
      ) : isloading ? (
        "loading..."
      ) : (
        <div className="images">
          <img
            className="cover"
            src={`/uploaded/${data?.coverPic}`}
            onClick={() => {
              setcoverBox(!coverBox);
              setprofileBox(false);
            }}
          />
          <img
            className="pic"
            src={`/uploaded/${data?.profilePic}`}
            onClick={() => {
              setcoverBox(false);
              setprofileBox(!profileBox);
            }}
          />

          {coverBox && (
            <div className="container ">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "/uploaded/" + data?.coverPic
                }
              />
              {+id === user.id && (
                <>
                  <input
                    type="file"
                    id="coverFile"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />

                  <label htmlFor="coverFile">
                    <span className="edit-btn btn">Edit</span>
                  </label>

                  <button
                    className="okbtn btn"
                    onClick={handleClickUpdateCover}
                  >
                    ok
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  setcoverBox(!coverBox);
                  setFile(null);
                }}
                className="canclebtn"
              >
                x
              </button>
            </div>
          )}
          {profileBox && (
            <div className="container ">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "/uploaded/" + data?.profilePic
                }
              />
              {+id === user.id && (
                <>
                  <input
                    type="file"
                    id="profileFile"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />

                  <label htmlFor="profileFile">
                    <span className="edit-btn btn">Edit</span>
                  </label>

                  <button
                    onClick={handleClickUpdateProfile}
                    className="okbtn btn"
                  >
                    ok
                  </button>
                </>
              )}
              <button
                onClick={(e) => {
                  setFile(null);
                  setprofileBox(!profileBox);
                }}
                className="canclebtn"
              >
                X
              </button>
            </div>
          )}
        </div>
      )}

      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://facebook.com" target="/">
              <FacebookTwoToneIcon fontSize="medium" />
            </a>
            <a href="https://pinterest.com" target="/">
              <PinterestIcon fontSize="medium" />
            </a>
            <a href="https://instagram.com" target="/">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="https://linkedin.com" target="/">
              <LinkedInIcon fontSize="medium" />
            </a>
            <a href="https://twitter.com" target="/">
              <TwitterIcon fontSize="medium" />
            </a>
          </div>
          <div className="center">
            <span>{data && data.username}</span>
            <div className="info">
              <div className="items">
                <PlaceIcon />
                <span>place</span>
              </div>
              <div className="items">
                <LanguageIcon />
                <span>language</span>
              </div>
            </div>

            {+id === user.id ? (
              <button onClick={() => setisupdate(!isupdate)}>update</button>
            ) : (
              <button onClick={handleClick}>
                {followedIds?.includes(+id) ? "Following" : "Follow"}
              </button>
            )}
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        {isupdate && (
          <Update showUpdate={showUpdate} userMutation={userMutation} />
        )}
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
