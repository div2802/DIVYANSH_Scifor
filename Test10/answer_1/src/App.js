import React from 'react';
import './App.css';
import UserDetails from './Components/UserDetails';

const App = () => {
  const user = {
    name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com',
    mobileNo: '123-456-7890',
    city: 'New York'
  };

  return (
    <div>
      <UserDetails
        name={user.name}
        age={user.age}
        email={user.email}
        mobileNo={user.mobileNo}
        city={user.city}
      />
    </div>
  );
};

export default App;
