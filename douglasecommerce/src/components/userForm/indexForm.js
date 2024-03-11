// App.js

import React from 'react';
import PersonList from './PersonList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const App = () => {
    return (
        <div>
            <PersonList />
            <SignupForm />

            <LoginForm />
        </div>
    );
};

export default App;
