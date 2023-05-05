import "./share.scss";
import Image from "../../images/img.png";
import Map from "../../images/map.png";
import Friend from "../../images/friend.png";
import { useContext, useState } from "react";
import { authContext } from "../../context/authContext";
import {useMutation,useQueryClient} from "@tanstack/react-query"
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";


const Share = () => {
  const queryClient = useQueryClient();
  const {user} = useContext(authContext);
  const [file,setFile]=useState(null);
  const [des,setDes]=useState("");

const upload = async ()=>{

  try{
    const newform = new FormData();
    newform.append("file",file);
    const res= await makeRequest.post("/upload",newform);
    return res.data;
  }
  catch(err){
    console.log(err);
  }
}
  const mutation = useMutation(
    
      (p)=>makeRequest.post("/posts",p)
  ,{

    onSuccess:()=>{
      queryClient.invalidateQueries(["post"])
    }
  })
  const handleClick= async(e)=>{
    e.preventDefault();
    let fileName="";
    if(file)fileName=await upload();
    mutation.mutate({des,img:fileName});
    setFile(null);
    setDes("");
  }
  const handleChange=(e)=>{
    console.log("changed");
      setFile(e.target.files[0]);
      console.log(file)
  }

  return (
    <div className="share">
      <div className="container">
        <div className="top">
        <div className="left">

        <Link to={`/profile/${user.id}`}>
        <img src={`/uploaded/${user.profilePic?user.profilePic:"b.webp"}`} />
            </Link>
          <input type="text" placeholder={`What's on your mind ${user.name}?`} value={des} onChange={(e)=>setDes(e.target.value)} />
            </div>
          <div className="right">{
            file && <img src={URL.createObjectURL(file)} alt=""/>
        }
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} onChange={handleChange}/>
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
