import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = [];
export const ExpenseTrackerContext = createContext(initialState);

export const ExpenseTrackerContextProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action creators
  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });

  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  return (
    <ExpenseTrackerContext.Provider
      value={{ transactions, deleteTransaction, addTransaction }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
