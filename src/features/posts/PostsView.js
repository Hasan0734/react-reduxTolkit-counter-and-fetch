import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './postSlice';

function PostsView() {
    const { isLoading, posts, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    console.log(posts)
    return (
        <div className='container-fluid'>
            <h1>Posts</h1>

            <section>
                {isLoading && <h3>Loading</h3>}
                {error && <h3>{error}</h3>}

                <div className='row'>

                    {posts.map(post => {
                        return (
                          <div className='col-12 col-md-6 col-lg-4 '>
                              <div className='card mb-4 p-5 bg-light'  style={{height: '320px'}}>
                                <h3 className='text-primary text-capitalize text-start'>{post.title} 💯 </h3>
                                <p className='text-start text-secondary'>{post.body}</p>
                            </div>
                          </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default PostsView