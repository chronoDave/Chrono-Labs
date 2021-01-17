import React, { useState } from 'react';

// Context
import { LanguageContext } from '../context';

interface LanguageProviderProps {
  children: React.ReactNode
}

const LanguageProvider = (props: LanguageProviderProps) => {
  const { children } = props;

  const [language, setLanguage] = useState(navigator.language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
