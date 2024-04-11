import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost : () => {},
  deletePost : () => {}
}

const PostList = createContext(DEFAULT_CONTEXT)


const postListReducer = (currPostList , action) =>{
  return currPostList;
}
function PostListProvider ({children}){
  const [postList , dispatchPostList] = useReducer(postListReducer , DEFAULT_CONTEXT);

  const addPost = () => {

  }

  const deletePost = () => {

  }


  return <PostList.Provider 
  value={[
    {postList,
    deletePost,
    addPost}

  ]}>
    {children}
    </PostList.Provider>
}

export default PostListProvider;