import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type LocationType = {
  type: 'current' | 'manual';
  lat?: number;
  long?: number;
  address?: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  mobile: string;
  location: LocationType | null;
  loading: boolean;
  login: (mobile: string) => Promise<void>;
  verifyOtp: () => Promise<void>;
  saveLocation: (location: LocationType) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const logged = await AsyncStorage.getItem('isLoggedIn');
      const mob = await AsyncStorage.getItem('mobile');
      const loc = await AsyncStorage.getItem('location');

      if (logged === 'true') setIsLoggedIn(true);
      if (mob) setMobile(mob);
      if (loc) setLocation(JSON.parse(loc));

      setLoading(false);
    };

    load();
  }, []);

  const login = async (mob: string) => {
    setMobile(mob);
    await AsyncStorage.setItem('mobile', mob);
  };

  const verifyOtp = async () => {
    setIsLoggedIn(true);
    await AsyncStorage.setItem('isLoggedIn', 'true');
  };

  const saveLocation = async (loc: LocationType) => {
    setLocation(loc);
    await AsyncStorage.setItem('location', JSON.stringify(loc));
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setMobile('');
    setLocation(null);
    await AsyncStorage.multiRemove(['isLoggedIn', 'mobile', 'location']);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        mobile,
        location,
        loading,
        login,
        verifyOtp,
        saveLocation,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
};