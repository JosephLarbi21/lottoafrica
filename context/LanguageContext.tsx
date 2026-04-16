"use client";

import { createContext, useContext, useEffect, useState } from "react";

type LangContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LangContextType>({
  language: "English",
  setLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) setLanguage(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
