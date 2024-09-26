import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface Show {
  id: number;
  name: string;
  summary: string;
  image: { original: string };
}

export interface Episode {
  id: number;
  name: string;
  season: number;
  number: number;
}

interface ShowContextType {
  show: Show | null;
  setShow: React.Dispatch<React.SetStateAction<Show | null>>;
  episodes: Episode[] | null;
  setEpisodes: React.Dispatch<React.SetStateAction<Episode[] | null>>;
}

const ShowContext = createContext<ShowContextType | undefined>(undefined);

export const ShowProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [show, setShow] = useState<Show | null>(null);
  const [episodes, setEpisodes] = useState<Episode[] | null>(null);

  return (
    <ShowContext.Provider value={{ show, setShow, episodes, setEpisodes }}>
      {children}
    </ShowContext.Provider>
  );
};

export const useShowContext = (): ShowContextType => {
  const context = useContext(ShowContext);
  if (!context) {
    throw new Error('useShowContext must be used within a ShowProvider');
  }
  return context;
};
