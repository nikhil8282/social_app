import { useContext, useState } from "react";
import "./post.scss";

import Comment from "../comments/Comment";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { authContext } from "../../context/authContext";

function Post({ post }) {
  const [comment, setComment] = useState(false);
  const { id, des, img, createdAt, username, profilePic, userId } = post;
  const { user } = useContext(authContext);

  // useQueryClinet for post api
  const queryClient = useQueryClient();
  const mutation = useMutation(
    (like) => {
      if (like) return makeRequest.delete("/likes?postId=" + id);
      return makeRequest.post("/likes", { id });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes", id]);
      },
    }
  );


// delete post image 
const delPost=()=>{
      makeRequest.delete("/delete/"+img)
}

  // handleClick for like
  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate(data.includes(user.id));
  };


  // useQuery calling api for getting likes
  const { isloading, error, data } = useQuery(["likes", id], () => {
    return makeRequest.get(`/likes?postId=${id}`).then((res) => res.data);
  });

  const { data: comments } = useQuery(["comments", id], () => {
    return makeRequest.get(`/comments?postId=${id}`).then((res) => res.data);
  });


// postMutation 
const postMutation = useMutation(()=>makeRequest.delete("/posts?postId="+id),{onSuccess:()=>queryClient.invalidateQueries(["post"])})

  const handleDeletePost=(e)=>{
    e.preventDefault();
    if(img)delPost();

    postMutation.mutate();
  }
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <a href={`/profile/${userId}`}>
              <img src={`/uploaded/${profilePic?profilePic:"b.webp"}`} />
            </a>
            <div className="detail">
              <span className="name">{username}</span>
              <span className="time">{moment(createdAt).fromNow()}</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{des}</p>
          {img &&<img src={`/uploaded/${img}`} />}
        </div>
        <div className="info">
          <div className="left">

          <div className="items">
            {data?.includes(user.id) ? (
              <FavoriteOutlinedIcon
              style={{ color: "red" }}
              onClick={handleClick}
              />
              ) : (
                <FavoriteBorderOutlinedIcon onClick={handleClick} />
                )}

            {error ? error : isloading ? "loading..." : data?.length}
          </div>
          <div className="items">
            <CommentOutlinedIcon onClick={() => setComment(!comment)} />
            <span>{comments?.length}</span>
          </div>
          <div className="items">
            <SendOutlinedIcon />
            
          </div>
          </div>
          <div className="right">
           {
            userId===user.id &&
            <div className="items">
              <DeleteOutlineOutlinedIcon onClick={handleDeletePost}/>
            </div>
           }
          </div>
        </div>
        {comment && <Comment postId={id} data={comments} />}
      </div>
    </div>
  );
}

export default Post;
