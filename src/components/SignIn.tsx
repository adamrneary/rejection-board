import React from 'react';
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AuthContext from "../context/AuthContext";

function SignIn({ classes }: WithStyles<typeof styles>) {
  return (
    <AuthContext.Consumer>
      {({ signInWithGoogle }) => (
        <div className={classes.masthead}>
          Rejected.
      <div><Button variant="outlined" size="large" onClick={signInWithGoogle}>Sign In</Button></div>
        </div>
      )}
    </AuthContext.Consumer>
  );
}

const styles = (theme: Theme) =>
  createStyles({
    masthead: {
      fontSize: 40,
      fontFamily: 'EB Garamond, serif',
      color: '#410904',
      textAlign: 'right',
      marginTop: '55vh',
      padding: 8,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 650,
    }
  });

export default withStyles(styles)(SignIn);