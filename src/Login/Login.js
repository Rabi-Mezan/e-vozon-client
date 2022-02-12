import React from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Button } from 'react-bootstrap';

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <Button variant="warning">Warning</Button>
        </div>
    );
};

export default Login;