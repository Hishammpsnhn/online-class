import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  name: string;
  email: string;
  isAdmin: boolean;
  std: number;
  stdID: string;
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

  const userInfo = localStorage.getItem("userInfo")
  console.log(userInfo, "from ")

  if (userInfo) {
    var ParseUser = JSON.parse(userInfo)
  }

  const [user, setUser] = useState<User | null>(ParseUser);

  const navigate = useNavigate()

  // useEffect(() => {
  //   if(userInfo){
  //     const ParseUser = JSON.parse(userInfo);
  //     setUser(ParseUser);
  //   }
  // }, [userInfo])

  useEffect(() => {

    if (user) {
      if (user.isAdmin) {
        navigate('/admin')
      } else {
        navigate('/home')
      }
    } else {
      navigate('/');
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
