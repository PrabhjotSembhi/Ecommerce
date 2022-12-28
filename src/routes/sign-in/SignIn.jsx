import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import SignUpForm from "../../components/sign-up-form/Sign-up-form";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>SIGN IN GOOGLE</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn;
