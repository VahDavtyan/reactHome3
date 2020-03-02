import React from 'react';
import Users from './components/User';
import Form from './components/Form';
import StatePropsDif from './components/statePropsDif';

const App = () => {
  return (
    <div>
      <Users name="Vahagn" age="28" hobby="footbol" />
      <br />
      <Form />
      <StatePropsDif />
    </div>
  );
};

export default App;
