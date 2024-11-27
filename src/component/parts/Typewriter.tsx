"use client"
import React, { createContext, useContext } from "react";

const TypewriterContext = createContext<string[]>([]);

export const TypewriterProvider = ({ children }: { children: React.ReactNode }) => {
  const strings = ["Web Developer", "Game Developer", "ℵ"];
  return (
    <TypewriterContext.Provider value={strings}>
      {children}
    </TypewriterContext.Provider>
  );
};

export const useTypewriterStrings = () => useContext(TypewriterContext);

export default TypewriterProvider; // Pastikan ada ekspor default
