// just fake authentication context for log in and log out in the application. Atfer we have servive we should delete it
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showToastMessage } from 'utils/toast-message';

interface User {
  firstName?: string;
  lastname?: string;
}

interface AuthContextData {
  user: User | null;
  loading: boolean;
  authData?: string;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState<string>('authData');
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadStorageData();
    // const unsubscribeUser = auth().onUserChanged((user) => {
    //   setUser(user);
    // });
    return () => {
      // unsubscribeUser();
    };
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        const data = JSON.parse(authDataSerialized);
        setAuthData(data);
      }
    } catch (error) {
      if (error instanceof Error) {
        showToastMessage(error?.message, 'error');
      }
    } finally {
      setLoading(false);
    }
  }
  function signOut() {}

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, AuthProvider, useAuth };
