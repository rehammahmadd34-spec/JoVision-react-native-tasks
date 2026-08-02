import React, {createContext, useState} from 'react';

type TextContextType = {
  text: string;
  setText: (value: string) => void;
};

export const TextContext38 = createContext<TextContextType>({
  text: '',
  setText: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const TextProvider38 = ({children}: Props) => {
  const [text, setText] = useState('');

  return (
    <TextContext38.Provider value={{text, setText}}>
      {children}
    </TextContext38.Provider>
  );
};