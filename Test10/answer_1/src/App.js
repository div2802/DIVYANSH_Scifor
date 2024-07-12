import React from 'react';
import './App.css';
import UserDetails from './Components/UserDetails';

const App = () => {
  const user = {
    name: 'Divyansh Pandey',
    age: 24,
    email: 'pshubham1222@gmail.com',
    mobileNo: '987654321',
    city: 'India',
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
