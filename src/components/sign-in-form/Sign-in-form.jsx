import { useState, useContext } from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";
import "./sign-in-container.scss";

import {
  signinAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../Form-input/FormInput";

import Button from "../button/Button";
const defaultFormFeilds = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { email, password } = formFeilds;

  const resetFeilds = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signinAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFeilds();
    } catch (error) {}
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <div>
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={SignInWithGoogle}>
            GOOGLE signin
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
