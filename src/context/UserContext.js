import React, { createContext, useReducer, useEffect } from "react";
import { UserReducer } from "../reducer/UserReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [meestUser, dispatch] = useReducer(UserReducer, [], () => {
    let localData = localStorage.getItem("meestUser");

    return localData ? JSON.parse(localData) : null;
  });

  useEffect(() => {
    localStorage.setItem("meestUser", JSON.stringify(meestUser));
  }, [meestUser]);

  return (
    <UserContext.Provider value={{ meestUser, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
