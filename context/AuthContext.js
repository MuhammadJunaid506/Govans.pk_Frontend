import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user:
    JSON.parse(localStorage.getItem("user") || localStorage.getItem("users")) ||
    null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    try {
      localStorage.setItem(
        "user",
        state.user?.user
          ? JSON.stringify(state.user?.user)
          : JSON.stringify(state.user)
      );
      localStorage.setItem(
        "users",
        state.user?.user
          ? JSON.stringify(state.user?.user)
          : JSON.stringify(state.user)
      );
    } catch (error) {
      console.log(error);
    }
  }, [state.user, state.user?.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user || state.user?.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
