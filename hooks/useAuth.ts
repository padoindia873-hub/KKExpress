// hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(
      'useAuth must be used inside an AuthProvider. ' +
      'Make sure your component is wrapped in <AuthProvider> from context/AuthContext.tsx'
    );
  }

  return context;
};