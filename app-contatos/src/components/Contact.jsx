import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <img className="contact__avatar" src={this.props.avatar} alt="Avatar" />
        <div className="contact__data">{this.props.name}</div>
        <div className="contact__data">{this.props.phone}</div>
        <div className="contact__data">{this.props.country}</div>
        <div className="contact__data">{this.props.admissionDate}</div>
        <div className="contact__data">{this.props.company}</div>
        <div className="contact__data">{this.props.department}</div>
      </article>
    );
  }
}

export default Contact;
