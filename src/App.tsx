import React from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import { FirestoreProvider } from "react-firestore";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import firebase from "./utils/firebase";
import AuthContext, { AuthContextProps } from "./context/AuthContext";
import AppRoutes from "./routes";
import SignIn from './components/SignIn';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#420805',
    },
  },
  typography: {
    fontFamily: [
      "EB Garamond",
      "-apple-system",
      "Helvetica Neue",
      "sans-serif"
    ].join(",")
  }
});

function App({ user, signOut, signInWithGoogle }: AuthContextProps) {
  console.log(user)
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ user, signOut, signInWithGoogle }}>
        <FirestoreProvider firebase={firebase}>
          {user ? <AppRoutes /> : <SignIn />}
        </FirestoreProvider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
