import React from 'react';

class User extends React.Component {
  render() {
    const { name, age, hobby } = this.props;
    return (
      <div>
        <div>Name: {name}</div>
        <div>Name: {age}</div>
        <div>Name: {hobby}</div>
      </div>
    );
  }
}

export default User;
