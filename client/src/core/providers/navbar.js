import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export default function NavbarProvider({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  const { visible, setVisible } = context;
  return { visible, setVisible };
}
