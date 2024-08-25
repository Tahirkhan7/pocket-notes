import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [notesGroup, setNotesGroup] = useState(
    JSON.parse(localStorage.getItem("notesGroup")) || []
  );

  useEffect(() => {
    localStorage.setItem("notesGroup", JSON.stringify(notesGroup));
  }, [notesGroup]);

  return (
    <AppContext.Provider
      value={{
        notesGroup,
        setNotesGroup,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
