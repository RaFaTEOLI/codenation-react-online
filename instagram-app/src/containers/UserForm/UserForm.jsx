import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [avatar, setAvatar] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleNameInput = event => {
    setName(event.target.value);
  };

  const handleUserNameInput = event => {
    setUsername(event.target.value);
  };

  const handleEmailInput = event => {
    setEmail(event.target.value);
  };

  const handleAvatarInput = event => {
    setAvatar(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const user = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: user,
    }).then(() => setSubmit(true));
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar ? (
                  <img src={avatar} alt="" />
                ) : (
                  <img
                    src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                    alt=""
                  />
                )}
              </div>
              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Ex: Fulano da Silva"
              onChange={event => handleNameInput(event)}
            />

            <label>Usuário</label>
            <input
              type="text"
              value={username}
              placeholder="Ex: fulano_da_silva"
              onChange={event => handleUserNameInput(event)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              placeholder="Ex: fulano@provedor.com"
              onChange={event => handleEmailInput(event)}
            />

            <label>
              Url da Imagem de Perfil (use a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              value={avatar}
              placeholder="http://..."
              onChange={event => handleAvatarInput(event)}
            />

            <button type="button" onClick={event => handleSubmit(event)}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>
      {submit && <SuccessMessage />}
    </React.Fragment>
  );
};

export default UserForm;
