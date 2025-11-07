import { createContext, useContext, useState } from "react";

const StoreContext = createContext<any>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <StoreContext.Provider value={{ count, setCount }}>
      {children}
    </StoreContext.Provider>
  );
}

//Hook para usar el store
export function useStore() {
  return useContext(StoreContext);
}
