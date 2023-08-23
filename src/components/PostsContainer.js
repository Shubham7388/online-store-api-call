
import React from 'react'
import PostCard from './PostCard'
import NewPostForm from './NewPostForm'
import {useDispatch, useSelector} from 'react-redux'

const PostsContainer = () => {
    // const dispatch = useDispatch();
    const posts = useSelector((state)=>state.posts);
    // const delPost = (id)=> {
    //     dispatch()
    // }
    return(
        <div>
            <NewPostForm/>
            {posts.length>0 ? <h2>All Posts:</h2> : <h2>Post not found!</h2> }
            {
                posts.map((post)=>{
                    return <PostCard post={post} key={post.id} />
                })
            }
        </div>
    )
}

export default PostsContainer