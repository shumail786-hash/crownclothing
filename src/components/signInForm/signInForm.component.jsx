import React, { useState } from "react";
import "./signInForm.component.scss";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInFromEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  // Destructure becuase they are going to use in our code.
  // We just enter "email" instead of formFields.email
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setformFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInFromEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password for Email");
          break;
        case "auth/user-not-found":
          alert("Email Not Found");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In With your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">
            Sign In
          </Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
