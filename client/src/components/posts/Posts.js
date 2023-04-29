
import {useQuery} from '@tanstack/react-query'
import './posts.scss'
import Post from './Post';
import { makeRequest } from '../../axios';



function  Posts() {
  const {isloading,error,data}= useQuery(["post"],()=>

    makeRequest.get("/posts").then((res)=>res.data)
    );
//  useEffect(()=>{
//   // console.log(data);
//   // data?.map((post)=>{

//   })
//  },[data])
   
  return (
    <div className='posts'>
      
      {
        error
        ?`${error}`
        : isloading
        ?
        "loading...":
       data?.map(post=>(
          <Post key={post.id}  post={post}/>
        ))
      }
      </div>
  )
}

export default  Posts