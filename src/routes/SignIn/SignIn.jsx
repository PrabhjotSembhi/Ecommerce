import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/Sign-up-form";
import SignInForm from "../../components/sign-in-form/Sign-in-form";

const SignIn = () => {
  
 
  return (
    <div>
      <h1>Sign In</h1>
      <SignInForm/>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
