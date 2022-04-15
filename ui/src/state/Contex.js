import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../store/store";

// https://stackoverflow.com/questions/57144498/how-to-use-react-context-with-usestate-hook-to-share-state-from-different-compon
export const ListOfStudentsContext = createContext();

export const ListOfStudentsProvider = ({ children }) => {
  const [students, setStudents] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/studentsData.json")
      .then((response) => {
        setStudents(response.data);
      });
  }, []);

  return (
    <ListOfStudentsContext.Provider value={{ students, setStudents }}>
      {children}
    </ListOfStudentsContext.Provider>
  );
};

export const ListOfGroupsContext = createContext();

export const ListOfGroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/data/groupsData.json").then((response) => {
      setGroups(response.data);
    });
  }, []);

  return (
    <ListOfGroupsContext.Provider value={{ groups, setGroups }}>
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
    axios
      .get("http://localhost:3000/data/defaultUsers.json")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  const defaultUserData = {
    uuid: 0,
    email: "",
    login: "",
    password: "",
  };
  const [loggedUser, setLoggedUser] = useLocalStorage(
    "account",
    defaultUserData
  );

  const login = (uuid) => {
    let loginUser = users.find((user) => user.uuid === uuid);
    setLoggedUser(loginUser);
  };

  const logout = () => {
    setLoggedUser(defaultUserData);
  };

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <LoggedUser.Provider value={{ loggedUser, login, logout }}>
        <Provider store={store}>{children}</Provider>
      </LoggedUser.Provider>
    </UsersContext.Provider>
  );
};
