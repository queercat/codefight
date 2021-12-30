import {auth, firebase_app} from "../../App";
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";

function SignIn() {
    const handleSignIn = () => {
        const provider = new GoogleAuthProvider;

        provider.setCustomParameters({prompt: 'select_account'});

        signInWithPopup(auth, provider);
    }
    
    return (
        <button onClick={handleSignIn}>Login</button>
    )
}

export default SignIn;