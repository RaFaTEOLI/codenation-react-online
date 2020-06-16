import React, { useState, useEffect } from 'react';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split('/')[2];

    fetch(
      `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users?search=${param}`
    )
      .then(response => response.json())
      .then(profileData => {
        setAvatar(profileData[0].avatar);
        setEmail(profileData[0].email);
        setName(profileData[0].name);
        setUsername(profileData[0].username);
        setUserId(profileData[0].id);
      });
  }, []);

  useEffect(() => {
    if (userId) {
      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${userId}/posts`
      )
        .then(response => response.json())
        .then(posts => {
          setUserPosts(posts);
          setLoading(false);
        });
    }
  }, [userId]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={name}
        avatar={avatar}
        username={username}
        email={email}
      />

      {loading ? <Loading /> : <UserPosts posts={userPosts} />}
    </div>
  );
};

export default ProfileRoute;
