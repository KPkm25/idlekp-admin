import React from 'react';
import { useAuth } from '../../context/AuthContext';

const SignOut = () => {
  const { signOut } = useAuth();

  return <button onClick={signOut}>Sign Out</button>;
};

export default SignOut;
