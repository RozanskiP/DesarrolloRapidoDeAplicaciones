import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../store/store";
import { Api_Url } from "../environment";

// https://stackoverflow.com/questions/57144498/how-to-use-react-context-with-usestate-hook-to-share-state-from-different-compon
export const ListOfStudentsContext = createContext();

export const ListOfStudentsProvider = ({ children }) => {
  const [students, setStudents] = useState();

  useEffect(() => {
    refreshStudents();
  }, []);

  const refreshStudents = () => {
    axios.get(Api_Url + "Student/GetAllStudent").then((response) => {
      setStudents(response.data);
    });
    console.log("refresh - students");
  };

  return (
    <ListOfStudentsContext.Provider
      value={{ students, setStudents, refreshStudents }}
    >
      {children}
    </ListOfStudentsContext.Provider>
  );
};

export const ListOfGroupsContext = createContext();

export const ListOfGroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState();

  useEffect(() => {
    refreshGroups();
  }, []);

  const refreshGroups = () => {
    axios.get(Api_Url + "Group/GetAllGroup").then((respGroups) => {
      setGroups(respGroups.data);
    });
    console.log("refresh - groups");
  }

  return (
    <ListOfGroupsContext.Provider value={{ groups, setGroups, refreshGroups }}>
      {children}
    </ListOfGroupsContext.Provider>
  );
};

// https://usehooks.com/useLocalStorage/
const useLocalStorage = (key, init) => {
  const [saveLoggedUser, setSaveLoggedUser] = useState(() => {
    if (typeof window === "undefined") {
      return init;
    } else {
      try {
        const item = window.localStorage.getItem(key);

        if (item) {
          return JSON.parse(item);
        } else {
          return init;
        }
      } catch (e) {
        console.log(e);
        return init;
      }
    }
  });

  const setStorageWithLoggedUser = (value) => {
    try {
      const toStore = value instanceof Function ? value(saveLoggedUser) : value;

      setSaveLoggedUser(toStore);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(toStore));
      }
    } catch (e) {
      console.log(e);
    }
  };
  return [saveLoggedUser, setStorageWithLoggedUser];
};

export const UsersContext = createContext();
export const LoggedUser = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    axios.get(Api_Url + "User/GetAllUser").then((response) => {
      setUsers(response.data);
    });
    console.log("refresh users");
  };

  const defaultUserData = {
    uuid: 0,
    email: "",
    login: "",
  };
  const [loggedUser, setLoggedUser] = useLocalStorage(
    "account",
    defaultUserData
  );

  const login = (uuid, email, login) => {
    let loginUser = {
      uuid: uuid,
      email: email,
      login: login,
    };

    setLoggedUser(loginUser);
  };

  const logout = () => {
    setLoggedUser(defaultUserData);
  };

  return (
    <UsersContext.Provider value={{ users, refreshData }}>
      <LoggedUser.Provider value={{ loggedUser, login, logout }}>
        <Provider store={store}>{children}</Provider>
      </LoggedUser.Provider>
    </UsersContext.Provider>
  );
};
