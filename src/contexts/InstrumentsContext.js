import { createContext, useContext } from 'react';
import instruments from '@/data/instruments';

const InstrumentsContext = createContext(instruments);

export const useInstruments = () => useContext(InstrumentsContext);

export function InstrumentsProvider({ children }) {
  return (
    <InstrumentsContext.Provider value={instruments}>
      {children}
    </InstrumentsContext.Provider>
  );
}