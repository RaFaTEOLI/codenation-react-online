import React from 'react';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  setInterval(() => {
    const video = document.querySelector('#video');
    if (video) {
      const percentual = (video.currentTime / video.duration) * 100;

      const valorDiv = document.querySelector('.story__progress__elapsed');
      valorDiv.style.width = `${percentual}%`;
      valorDiv.innerHTML = `${percentual.toFixed(1)}%`;
    }
  }, 500);
  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <a className="user__thumb" href={`/users/${user.username}`}>
              <img src={user.avatar} alt={user.name} />
            </a>
            <a className="user__name" href={`/users/${user.username}`}>
              {user.name}
            </a>
          </div>
          <button className="story__close" onClick={() => handleClose()}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div className="story__progress__elapsed"></div>
        </div>
      </div>
      <div className="container">
        <section className="story__video__wrapper">
          <video
            id="video"
            autoPlay
            className="video-player"
            loop
            playsInline
            src={story.videoUrl}
          ></video>
        </section>
      </div>
    </section>
  );
};

export default Story;
