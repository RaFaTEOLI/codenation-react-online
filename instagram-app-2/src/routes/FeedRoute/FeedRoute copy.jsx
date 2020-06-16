import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
      .then(response => response.json())
      .then(data => {
        setStories(data);
        getAllUserPosts();
      });
  }, []);

  async function getUserHandler(userId) {
    const response = await fetch(
      `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}`
    );
    const user = await response.json();
    return user;
  }

  async function getAllUsers() {
    const response = await fetch(
      `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/`
    );
    const users = await response.json();
    return users;
  }

  async function getAllUserPosts() {
    let userPosts = [];
    const users = await getAllUsers();
    users.forEach(user => {
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`
      )
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data) && data.length) {
            data.forEach(post => userPosts.push(post));
            setPosts(userPosts);
          }
        });
    });

    setLoading(false);
  }

  return (
    <div data-testid="feed-route">
      <Stories stories={stories} getUserHandler={getUserHandler} />
      {loading ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserHandler} />
      )}
    </div>
  );
};

export default FeedRoute;
