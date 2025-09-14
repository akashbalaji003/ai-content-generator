// import {createContext} from "react";
// export const TotalUsageContext = createContext<any>(0);
// TotalUsageContext.tsx
"use client"
import React, { createContext, useState } from 'react';

interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: (usage: number) => void;
}

export const TotalUsageContext = createContext<TotalUsageContextType>({
  totalUsage: 0,
  setTotalUsage: () => {},
});

export const TotalUsageProvider = ({ children }: { children: React.ReactNode }) => {
  const [totalUsage, setTotalUsage] = useState<number>(0);

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      {children}
    </TotalUsageContext.Provider>
  );
};