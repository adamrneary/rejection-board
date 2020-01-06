import React from "react";

export type AuthContextProps = {
  user?: firebase.User;
  signInWithGoogle: () => void;
  signOut: () => void;
};

const AuthContext = React.createContext<AuthContextProps>({
  signOut() { },
  signInWithGoogle() { },
});

export default AuthContext;
