import React from "react";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import SignInForm from "../../components/signInForm/signInForm.component";
import "./authentication.style.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

// {
// If u want to sign in user with redirect follow this method.
// }

// import React, { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   createUserDocumentFromAuth,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
// const SignIn = () => {
//   useEffect(() => {
//     const getUserResultFromRedirect = async () => {
//       const response = await getRedirectResult(auth);
//       if (response) {
//         const userDocRef = await createUserDocumentFromAuth(response.user);
//       }
//     };
//     getUserResultFromRedirect();
//   }, []);

//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <button onClick={signInWithGoogleRedirect}>
//         SignIn With Google Redirect
//       </button>
//     </div>
//   );
// };

// export default SignIn;
