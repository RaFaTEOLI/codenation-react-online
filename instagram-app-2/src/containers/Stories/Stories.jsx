import React, { useState } from 'react';

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, setShowStory] = useState(false);
  const [currentStory, setCurrentStory] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const handleClose = () => {
    setShowStory(false);
  };
  const handleOpen = (story, user) => {
    setShowStory(true);
    setCurrentStory(story);
    setCurrentUser(user);
  };

  function UserStory({ key, userId, handleOpen, story }) {
    const [user, setUser] = useState({});
    React.useEffect(() => {
      Promise.all([getUserHandler(userId)]).then(values => {
        setUser(values[0]);
      });
    });

    if (user.id === '1') {
      return (
        <button
          key={key}
          className="user__thumb user__thumb--hasNew"
          onClick={() => handleOpen(story, user)}
        >
          <div className="user__thumb__wrapper">
            <img src={user.avatar} alt={user.name} />
          </div>
        </button>
      );
    } else {
      return (
        <button
          key={key}
          className="user__thumb user__thumb"
          onClick={() => handleOpen(story, user)}
        >
          <div className="user__thumb__wrapper">
            <img src={user.avatar} alt={user.name} />
          </div>
        </button>
      );
    }
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories &&
            stories.map(story => (
              <UserStory
                key={story.id}
                userId={story.userId}
                story={story}
                handleOpen={handleOpen}
              />
            ))}
        </div>
      </section>

      {showStory && (
        <Story
          story={currentStory}
          user={currentUser}
          handleClose={handleClose}
        />
      )}
    </React.Fragment>
  );
};

export default Stories;
