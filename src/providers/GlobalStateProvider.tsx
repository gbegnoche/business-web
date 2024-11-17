import React from "react";
import { Theme } from "../Types";

export interface GlobalStateInterface {
  theme: Theme;
}

export const GlobalStateContext = React.createContext({
  state: {} as Partial<GlobalStateInterface>,
  setState: {} as React.Dispatch<
    React.SetStateAction<Partial<GlobalStateInterface>>
  >,
});

export const GlobalStateProvider = ({
  children,
  value = {} as GlobalStateInterface,
}: {
  children: React.ReactNode;
  value?: Partial<GlobalStateInterface>;
}) => {
  const [state, setState] = React.useState(value);
  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
