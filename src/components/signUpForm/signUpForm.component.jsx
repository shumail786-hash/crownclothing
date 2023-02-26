import React, { useState } from "react";
import {
  createUserAuthFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./signUpForm.component.scss";
import FormInput from "../formInput/formInput.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  // Destructure becuase they are going to use in our code.
  // We just enter "email" instead of formFields.email
  const { displayName, email, password, confirmPassword } = formFields;
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 6) {
      alert("Password should be greater than 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password Not Match");
      return;
    }

    try {
      const { user } = await createUserAuthFromEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      alert("User Created Successfully");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email Already In Use");
      } else {
        console.log("User Creation Encoutered An Error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up With your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
