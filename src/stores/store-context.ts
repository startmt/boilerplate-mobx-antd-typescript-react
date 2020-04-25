import React, { useContext } from "react";
import { RootStore } from "./RootStore";

const rootContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(rootContext);

export const useTodo = () => {
  const { todoStore } = useStores();
  return todoStore;
};
