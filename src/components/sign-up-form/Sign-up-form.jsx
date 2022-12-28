import { useState } from "react";
import './sign-up-container.scss';

import {
  createAuthUserWithEmailAndPassword,
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


const SignUpForm = () => {
  const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
  const { displayName, email, password, confirmPassword } = formFeilds;

  const resetFeilds = () => {
    setFormFeilds(defaultFormFeilds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("its happening");

    if (email && password == confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });

        console.log(user);
        resetFeilds();
      } catch (error) {
        console.log(error, "error hai");
      }
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormFeilds({ ...formFeilds, [name]: value });
  };

  return (
    <div className="sign-up-container">
        <h2>Dont have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label="ConfirmPassword"
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
