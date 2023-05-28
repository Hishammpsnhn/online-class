import { escape } from 'querystring';
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  name: string;
  email: string;
  isAdmin: boolean;
};

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => { },
});

type UserProviderProps = {
  children: React.ReactNode;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate()

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo")
    if (userInfo) {
      const ParseUser = JSON.parse(userInfo)
      setUser(ParseUser);
      if (ParseUser.isAdmin) {
        navigate('/admin')
      } else {
        navigate('/home')
      }
    } else {
      navigate('/');
    }
  }, []);



  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
