import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        {posts &&
          posts.map(post => (
            <Post postInfo={post} userInfo={getUserHandler(post.userId)} />
          ))}
      </section>
    </div>
  );
};

export default Posts;
